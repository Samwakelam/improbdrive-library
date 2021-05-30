import React from 'react';

import { CalendarInterface } from './components/calendar/calendar.definition';
import { Calendar } from './components/calendar/calendar.component';

function App(props: CalendarInterface): JSX.Element {
    return <Calendar {...props} />;
}

export default App;
