import React, { useState, useCallback } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import api from '../../../services/api';

import PageHeader from '../../../components/PageHeader';
import TeacherItem, { Teacher } from '../../../components/TeacherItem';

import {
  Container,
  TeachersList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(state => !state);
  }, []);

  const handleFiltersSubmit = useCallback(async () => {
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }, [subject, weekDay, time]);

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRigth={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )} // prettier-ignore
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={setSubject}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  value={weekDay}
                  onChangeText={setWeekDay}
                  placeholder="Qual o dia?"
                />
              </InputBlock>

              <InputBlock>
                <Label>Horário</Label>
                <Input
                  value={time}
                  onChangeText={setTime}
                  placeholder="Qual o horário?"
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <TeachersList>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </TeachersList>
    </Container>
  );
};

export default TeacherList;
