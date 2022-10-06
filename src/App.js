import CreateEmployee from "./components/createEmployee/CreateEmployee";
import ReadEmployee from "./components/readEmployee/ReadEmployee";
import "./App.css"
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import useStyles from "./style"
function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <div>
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant="h2" align="center">
              Employees
            </Typography>
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="strect">
                <Grid item xs={12} sm={7}>
                  <AppBar className={classes.appBar} position="static" color="inherit" >
                    <ReadEmployee />
                  </AppBar>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <AppBar className={classes.appBar} position="static" color="inherit" >
                    <CreateEmployee />
                  </AppBar>
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      </div>
    </div>
  );
}

export default App;
