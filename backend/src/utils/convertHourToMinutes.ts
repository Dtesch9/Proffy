// 8:00 - map(Number) will convert all of them to number
// 8 00

export default function convertHourToMinutes(time: string): number {
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}
