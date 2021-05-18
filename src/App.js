import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import './App.css';
import Calender from './components/Calender'

const useStyles = makeStyles({
  root: {
    paddingRight:'60px',
    paddingLeft:'60px'
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
      <Grid item xs={12} height="75%"  alignItems="center"   justify="center">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Calender />
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default App;
