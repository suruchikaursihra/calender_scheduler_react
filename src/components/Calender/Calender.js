import React from 'react';
import Scheduler from 'devextreme-react/scheduler';
import notify from 'devextreme/ui/notify';
import { data } from '../../shared/data';
import { Card, CardContent, Container, Grid } from '@material-ui/core';

const currentDate = new Date(2021, 4, 27);
const views = [
  { type: 'agenda', name: 'Day List View', agendaDuration: 1, },
  { type: 'day', name: 'Day', intervalCount: 1 },
  { type: 'week' },
  { name: '4 Days', type: 'day', intervalCount: 4 },
  { name: 'Month', type: 'month', intervalCount: 1 },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allowAdding: true,
      allowDeleting: true,
      allowResizing: true,
      allowDragging: true,
      allowUpdating: true
    };
    this.onAllowAddingChanged = this.onAllowAddingChanged.bind(this);
    this.onAllowDeletingChanged = this.onAllowDeletingChanged.bind(this);
    this.onAllowResizingChanged = this.onAllowResizingChanged.bind(this);
    this.onAllowDraggingChanged = this.onAllowDraggingChanged.bind(this);
    this.onAllowUpdatingChanged = this.onAllowUpdatingChanged.bind(this);
    this.showAddedToast = this.showAddedToast.bind(this);
    this.showUpdatedToast = this.showUpdatedToast.bind(this);
    this.showDeletedToast = this.showDeletedToast.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <Grid>
            <Card variant="outlined">
              <CardContent>
                <Scheduler
                  timeZone="Asia/Kolkata"
                  dataSource={data}
                  views={views}
                  defaultCurrentView="week"
                  defaultCurrentDate={currentDate}
                  startDayHour={9}
                  endDayHour={19}
                  height={600}
                  editing={this.state}
                  onAppointmentAdded={this.showAddedToast}
                  onAppointmentUpdated={this.showUpdatedToast}
                  onAppointmentDeleted={this.showDeletedToast}
                />
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }

  onAllowAddingChanged(e) {
    this.setState({ allowAdding: e.value });
  }

  onAllowDeletingChanged(e) {
    this.setState({ allowDeleting: e.value });
  }

  onAllowResizingChanged(e) {
    this.setState({ allowResizing: e.value });
  }

  onAllowDraggingChanged(e) {
    this.setState({ allowDragging: e.value });
  }

  onAllowUpdatingChanged(e) {
    this.setState({ allowUpdating: e.value });
  }

  showToast(event, value, type) {
    notify(`${event} "${value}" task`, type, 800);
  }

  showAddedToast(e) {
    this.showToast('Added', e.appointmentData.text, 'success');
  }

  showUpdatedToast(e) {
    this.showToast('Updated', e.appointmentData.text, 'info');
  }

  showDeletedToast(e) {
    this.showToast('Deleted', e.appointmentData.text, 'danger');
  }
}

export default App;

