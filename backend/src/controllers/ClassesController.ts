import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

type ScheduleItemArray = {
  week_day: number;
  from: number;
  to: number;
}[];

class ClassesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const filters = request.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if (!week_day || !subject || !time) {
      return response
        .status(400)
        .json({ error: 'Missing filters to searsh classes' });
    }

    const timeInMinutes = convertHourToMinutes(time);

    // We have to use the key word function
    // so we get access to this, arrow function does not creates a scopo
    const classes = await db('classes')
      .whereExists(function query() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)]) // each two question marks (??) represents one position of the array
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id') // Returns a innerJoin
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersIds[0];

      const [class_id] = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });

      const classSchedule: ScheduleItemArray = schedule.map(
        (scheduleItem: ScheduleItem) => {
          const { week_day, from, to } = scheduleItem;

          return {
            class_id,
            week_day,
            from: convertHourToMinutes(from),
            to: convertHourToMinutes(to),
          };
        },
      );

      await trx('class_schedule').insert(classSchedule);

      await trx.commit(); // Insert all data only here, if everything goes ok

      return response.status(201).send();
    } catch (err) {
      await trx.rollback(); // If error on creation it won't save anything

      return response
        .status(400)
        .json({ error: 'Unexpected error while creating new class' });
    }
  }
}

export default ClassesController;
