import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Card, CardContent, Container, Grid, makeStyles } from '@material-ui/core';
import './App.css';
import Calender from './components/Calender'

const useStyles = makeStyles({
  root: {
    paddingTop: '30px',
    paddingRight: '60px',
    paddingLeft: '60px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();

  return (
    <div>
      {/* <Container maxWidth="lg">
        <Grid >
          <Card className={classes.root} variant="outlined">
            <CardContent> */}
              <Calender />
            {/* </CardContent>
          </Card>
        </Grid>
      </Container> */}
    </div>
  );
}

export default App;