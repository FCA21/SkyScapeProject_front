import './Calendario.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function BasicDateCalendar() {
  return (
    <div>
      <p className='calendarioTitulo'>Calendario</p>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar className='calendar' />
    </LocalizationProvider>
    </div>
  );
}