import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/home';
import Learner from './views/learner';
import SideBar from './components/sidebar';
import Swe from './views/swe';

const Routes = () => (
  <Router>
    <SideBar/>
    <Switch>
      <Route path="/creative/body" component={Home} />
      <Route path="/creative/words" component={Home} />
      <Route path="/swe/domio"><Swe domio/></Route>
      <Route path="/swe/uptop"><Swe uptop/></Route>
      <Route path="/swe/clark"><Swe clark/></Route>
      <Route path="/learner/coursework"><Learner isCourse/></Route>
      <Route path="/learner/reading"><Learner/></Route>
      <Route path="/" component={Home}/>
    </Switch>
  </Router>
);

export default Routes;