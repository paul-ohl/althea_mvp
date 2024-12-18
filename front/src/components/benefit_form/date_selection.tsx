import RepetitionSelector from './date_selection/repetitionSelector';
import Calendar from './date_selection/calendar';

export default function DateSelection() {
  return (
    <>
      <RepetitionSelector />
      <p className="text-sm/6 font-medium text-gray-900">Choisir une date</p>
      <Calendar />
    </>
  );
}
