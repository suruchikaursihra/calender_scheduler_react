// import React from 'react';
// import Scheduler from 'devextreme-react/scheduler';
// import { generateAppointments, holidays } from '../../shared/data';
// import Utils from './util';
// import DataCell from './DataCell.js';
// import DateCell from './DateCell.js';
// import TimeCell from './TimeCell.js';
// import notify from 'devextreme/ui/notify';

// const currentDate = new Date(2021, 4, 31);
// const views = [
//   { type: 'agenda', name: 'Day List View', agendaDuration: 1, },
//   { type: 'day', name: 'Day', intervalCount: 1 },
//   { name: '4 Days', type: 'day', intervalCount: 4 },
//   { name: 'Month', type: 'month', intervalCount: 1 },
// ];


// // const scrolling = { mode: 'virtual' };
// const startDay = new Date(2021, 4, 20);
// const endDay = new Date(2021, 5, 1);
// const startDayHour = 6;
// const endDayHour = 24;

// const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);

// function App() {

//   const notifyDisableDate = () => {
//     notify('Cannot create or move an appointment/event to disabled time/date regions.', 'warning', 1000);
//   }


//   const onAppointmentFormOpening = (e) => {
//     const startDate = new Date(e.appointmentData.startDate);
//     if (!Utils.isValidAppointmentDate(startDate)) {
//       e.cancel = true;
//       notifyDisableDate();
//     }
//     applyDisableDatesToDateEditors(e.form);
//   }

//   const onAppointmentAdding = (e) => {
//     const isValidAppointment = Utils.isValidAppointment(e.component, e.appointmentData);
//     if (!isValidAppointment) {
//       e.cancel = true;
//       notifyDisableDate();
//     }
//   }

//   const onAppointmentUpdating = (e) => {
//     const isValidAppointment = Utils.isValidAppointment(e.component, e.newData);
//     if (!isValidAppointment) {
//       e.cancel = true;
//       notifyDisableDate();
//     }
//   }

//   const applyDisableDatesToDateEditors = (form) => {
//     const startDateEditor = form.getEditor('startDate');
//     startDateEditor.option('disabledDates', holidays);

//     const endDateEditor = form.getEditor('endDate');
//     endDateEditor.option('disabledDates', holidays);
//   }


//   const renderDataCell = (itemData) => {
//     return <DataCell itemData={itemData} />;
//   }

//   const renderDateCell = (itemData) => {
//     return <DateCell itemData={itemData} />;
//   }

//   const renderTimeCell = (itemData) => {
//     return <TimeCell itemData={itemData} />;
//   }

//   const onAppointmentClick = (e) => {
//     // console.log(e);
//     e.cancel = true;
//   }
//   //show appointment on hover
//   const onAppointmentRendered = (e) => {
//     var el = e.appointmentElement;
//     el.onmouseenter = function (args) {
//       // setTimeout(function () {
//         e.component.showAppointmentTooltip(e.appointmentData, e.appointmentElement, e.targetedAppointmentData);
//       // }, 900);
//     };
//     el.onmouseleave=function(args){
//       console.log(args);
//     };
//   }


//   return (
//     <React.Fragment>
//       <Scheduler
//         timeZone="Asia/Kolkata"
//         dataSource={appointments}
//         height={600}
//         views={views}
//         adaptivityEnabled={true}
//         defaultCurrentView="day"
//         showCurrentTimeIndicator={true}
//         shadeUntilCurrentTime={true}
//         defaultCurrentDate={currentDate}
//         startDayHour={startDayHour}
//         endDayHour={endDayHour}
//         // cellDuration={60}
//         showAllDayPanel={true}
//         dataCellRender={renderDataCell}
//         dateCellRender={renderDateCell}
//         timeCellRender={renderTimeCell}
//         onAppointmentFormOpening={onAppointmentFormOpening}
//         onAppointmentAdding={onAppointmentAdding}
//         onAppointmentUpdating={onAppointmentUpdating}
//         onAppointmentClick={onAppointmentClick}
//         onAppointmentRendered={onAppointmentRendered}
//       />
//     </React.Fragment>

//   );
// }

// export default App;

import React from 'react';

import Scheduler from 'devextreme-react/scheduler';
import notify from 'devextreme/ui/notify';

import { data, holidays } from '../../shared/data';
import Utils from './utils';
import DataCell from './DataCell.js';
import DateCell from './DateCell.js';
import TimeCell from './TimeCell.js';
import AppointmentTooltip from './AppointmentTooltip';

const currentDate = new Date(2021, 4, 25);
const views = [
  { type: 'agenda', name: 'Day List View', agendaDuration: 1, },
  { type: 'day', name: 'Day', intervalCount: 1 },
  { type: 'week' },
  { name: '4 Days', type: 'day', intervalCount: 4 },
  { name: 'Month', type: 'month', intervalCount: 1 },
];
const currentView = 'day';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onAppointmentFormOpening = (e) => {
    const startDate = new Date(e.appointmentData.startDate);
    if (!Utils.isValidAppointmentDate(startDate)) {
      e.cancel = true;
      this.notifyDisableDate();
    }
    this.applyDisableDatesToDateEditors(e.form);
  }

  onAppointmentAdding = (e) => {
    const isValidAppointment = Utils.isValidAppointment(e.component, e.appointmentData);
    if (!isValidAppointment) {
      e.cancel = true;
      this.notifyDisableDate();
    }
  }

  onAppointmentUpdating = (e) => {
    const isValidAppointment = Utils.isValidAppointment(e.component, e.newData);
    if (!isValidAppointment) {
      e.cancel = true;
      this.notifyDisableDate();
    }
  }

  notifyDisableDate = () => {
    notify('Cannot create or move an appointment/event to disabled time/date regions.', 'warning', 1000);
  }

  applyDisableDatesToDateEditors = (form) => {
    const startDateEditor = form.getEditor('startDate');
    startDateEditor.option('disabledDates', holidays);

    const endDateEditor = form.getEditor('endDate');
    endDateEditor.option('disabledDates', holidays);
  }

  renderDataCell = (itemData) => {
    return <DataCell itemData={itemData} />;
  }

  renderDateCell = (itemData) => {
    return <DateCell itemData={itemData} />;
  }

  renderTimeCell = (itemData) => {
    return <TimeCell itemData={itemData} />;
  }

  onAppointmentClick = (e) => {
    // e.cancel = true;
  }

  onAppointmentRendered = (e) => {
    var el = e.appointmentElement;
    el.onmouseenter = function (args) {
      e.component.showAppointmentTooltip(e.appointmentData, e.appointmentElement, e.targetedAppointmentData);
    };
    el.onmouseleave = function (args) {
      setTimeout(function () {
        e.component.hideAppointmentTooltip();
      },1000);
    };
  }

  render() {
    return (
      <Scheduler
        dataSource={data}
        views={views}
        defaultCurrentView={currentView}
        defaultCurrentDate={currentDate}
        height={600}
        firstDayOfWeek={0}
        startDayHour={9}
        endDayHour={19}
        showAllDayPanel={true}
        dataCellRender={this.renderDataCell}
        dateCellRender={this.renderDateCell}
        timeCellRender={this.renderTimeCell}
        onAppointmentFormOpening={this.onAppointmentFormOpening}
        onAppointmentAdding={this.onAppointmentAdding}
        onAppointmentClick={this.onAppointmentClick}
        onAppointmentUpdating={this.onAppointmentUpdating}
        onAppointmentRendered={this.onAppointmentRendered}
        appointmentTooltipComponent={AppointmentTooltip}
      />
    );
  }
}

export default App;
