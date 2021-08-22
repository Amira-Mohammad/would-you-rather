import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Home from './components/home/Home';
import NewQuestion from './components/newQuestion/NewQuestion';
import LeaderBoard from './components/leaderBoard/LeaderBoard';
import QuestionDetails from './components/dashboard/questionDetails/QuestionDetails';

function App() {
  return (

    <div className="App">

      <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/newquestion" component={NewQuestion} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/questionDetails" component={QuestionDetails} />


        </Switch>
      </BrowserRouter>


    </div>

  );
}

export default App;
