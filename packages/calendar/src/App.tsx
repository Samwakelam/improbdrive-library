import { Calendar } from './components/calendar/calendar.component';
import { CalendarInterface } from './components/calendar/calendar.definition';
function App(props: CalendarInterface): JSX.Element {
    return <Calendar {...props} />;
}

export default App;
