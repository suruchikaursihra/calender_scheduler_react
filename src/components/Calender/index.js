
import React from 'react';
import Scheduler, { AppointmentDragging } from 'devextreme-react/scheduler';
import ListViewAppointments from '../ListViewAppointments';
import { data } from '../../shared/data';
import ScrollView from 'devextreme-react/scroll-view';
import Draggable from 'devextreme-react/draggable';

const currentDate = new Date(2021, 4, 27);
const views = ['day', 'week', 'workWeek', 'month'];
const draggingGroupName = 'appointmentsGroup';

class Calender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }

    onListDragStart(e) {
        e.cancel = true;
    }

    onItemDragStart(e) {
        e.itemData = e.fromData;
    }

    onItemDragEnd(e) {
        if (e.toData) {
            e.cancel = true;
        }
    }

    render() {

        return (
            <div>
                { data.length <= 50 ?
                    <React.Fragment>
                        <ScrollView id="scroll">
                            <Draggable
                                id="list"
                                data="dropArea"
                                group={draggingGroupName}
                                onDragStart={this.onListDragStart}>
                            </Draggable>
                        </ScrollView>
                        <Scheduler
                            timeZone="Asia/Kolkata"
                            dataSource={data}
                            views={views}
                            defaultCurrentView="day"
                            defaultCurrentDate={currentDate}
                            height={600}
                            startDayHour={9}
                            editing={true}>
                            <AppointmentDragging
                                group={draggingGroupName}
                                onRemove={this.onAppointmentRemove}
                                onAdd={this.onAppointmentAdd}
                            />
                        </Scheduler>
                    </React.Fragment>
                    :
                    <ListViewAppointments />
                }
            </div>

        );
    }
}

export default Calender;