import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import { generateAppointments, holidays } from '../../shared/data';
import Utils from './util';
import DataCell from './DataCell.js';
import DateCell from './DateCell.js';
import TimeCell from './TimeCell.js';
import notify from 'devextreme/ui/notify';

const currentDate = new Date(2021, 4, 27);
const views = [
  { type: 'day', name: 'Day', intervalCount: 1 },
  { name: '4 Days', type: 'day', intervalCount: 4 },
  { name: 'Month', type: 'month', intervalCount: 1 },
  { name: 'Day List View', type: 'agenda', agendaDuration: 1, }
];


const scrolling = { mode: 'virtual' };
const startDay = new Date(2021, 4, 1);
const endDay = new Date(2021, 4, 28);
const startDayHour = 6;
const endDayHour = 24;

const appointments = generateAppointments(startDay, endDay, startDayHour, endDayHour);

function App() {

  const notifyDisableDate = () => {
    notify('Cannot create or move an appointment/event to disabled time/date regions.', 'warning', 1000);
  }


  const onAppointmentFormOpening = (e) => {
    const startDate = new Date(e.appointmentData.startDate);
    if (!Utils.isValidAppointmentDate(startDate)) {
      e.cancel = true;
      notifyDisableDate();
    }
    applyDisableDatesToDateEditors(e.form);
  }

  const onAppointmentAdding = (e) => {
    const isValidAppointment = Utils.isValidAppointment(e.component, e.appointmentData);
    if (!isValidAppointment) {
      e.cancel = true;
      notifyDisableDate();
    }
  }

  const onAppointmentUpdating = (e) => {
    const isValidAppointment = Utils.isValidAppointment(e.component, e.newData);
    if (!isValidAppointment) {
      e.cancel = true;
      notifyDisableDate();
    }
  }

  const applyDisableDatesToDateEditors = (form) => {
    const startDateEditor = form.getEditor('startDate');
    startDateEditor.option('disabledDates', holidays);

    const endDateEditor = form.getEditor('endDate');
    endDateEditor.option('disabledDates', holidays);
  }


  const renderDataCell = (itemData) => {
    return <DataCell itemData={itemData} />;
  }

  const renderDateCell = (itemData) => {
    return <DateCell itemData={itemData} />;
  }

  const renderTimeCell = (itemData) => {
    return <TimeCell itemData={itemData} />;
  }


  return (
    <Scheduler
      timeZone="Asia/Kolkata"
      dataSource={appointments}
      height={600}
      views={views}
      defaultCurrentView="day"
      showCurrentTimeIndicator={true}
      shadeUntilCurrentTime={true}
      defaultCurrentDate={currentDate}
      startDayHour={startDayHour}
      endDayHour={endDayHour}
      cellDuration={50}
      showAllDayPanel={true}
      dataCellRender={renderDataCell}
      dateCellRender={renderDateCell}
      timeCellRender={renderTimeCell}
      onAppointmentFormOpening={onAppointmentFormOpening}
      onAppointmentAdding={onAppointmentAdding}
      onAppointmentUpdating={onAppointmentUpdating}
    />
  );
}

export default App;
