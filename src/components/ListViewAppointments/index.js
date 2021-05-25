import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { data } from '../../shared/data';

const currentDate = new Date(2021, 4, 24);
const views = ['Day'];

class App extends React.Component {
    render() {
        return (
            <Scheduler
                timeZone="Asia/Kolkata"
                dataSource={data}
                views={views}
                defaultCurrentView="day"
                currentView="agenda"
                defaultCurrentDate={currentDate}
                height={600}
                startDayHour={9} />
        );
    }
}

export default App;