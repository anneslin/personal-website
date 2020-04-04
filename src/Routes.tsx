import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/home';
import Learner from './views/learner';
import SideBar from './components/sidebar';


const Routes = () => (
  <Router>
    <SideBar/>
    <Switch>
      <Route path="/creative/body" component={Home} />
      <Route path="/creative/words" component={Home} />
      <Route path="/swe/domio" component={Home} />
      <Route path="/swe/uptop" component={Home} />
      <Route path="/swe/clark" component={Home} />
      <Route path="/swe/domio" component={Home} />
      <Route path="/learner/coursework"><Learner isCourse/></Route>
      <Route path="/learner/reading"><Learner isCourse={false}/></Route>
      <Route path="/" component={Home}/>
    </Switch>
  </Router>
);

export default Routes;