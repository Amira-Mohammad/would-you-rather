import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Home from './components/home/Home';
import NewQuestion from './components/newQuestion/NewQuestion';
import LeaderBoard from './components/leaderBoard/LeaderBoard';
import QuestionDetails from './components/dashboard/questionDetails/QuestionDetails';
import QuestionPoll from './components/dashboard/questionPoll/QuestionPoll';
import { connect } from 'react-redux';

function App(props) {
  console.log('xeeeeeeeee', props.users.loginUser);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = props.users.loginUser && props.users.loginUser || false;
    return <Route {...rest} render={(props) => (
      !user
        ? <Redirect to='/' />
        //handleChildFunc={handleChildFunc} 
        :
        <Component {...props} user={user} />
    )}
    />
  }
  return (

    <div className="App">

      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/home" component={Home} />
          <Route path="/newquestion" component={NewQuestion} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/questionDetails/:id" component={QuestionDetails} />
          <Route path="/questionPoll" component={QuestionPoll} />

          <PrivateRoute
            path='/dashboard'
            exact={true}
            component={Dashboard}
          // handleChildFunc={this.handleChildFunc}
          />


        </Switch>
      </BrowserRouter>


    </div>

  );
}

function mapStateToProps({ users }) {

  return {
    users,
  }
}

export default connect(mapStateToProps)(App);
