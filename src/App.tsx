import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  withRouter,
  useRouteMatch
} from "react-router-dom";
import Home from './views/home';
import Learner from './views/learner';
import SideBar from './components/menu/sidebar';
import TopBar from './components/menu/topbar';
import Swe from './views/swe';
import Body from './views/body';
import { theme } from "./themeStyleConstants";

const { background } = theme;
const App = () => {
  const swePath = useRouteMatch(["/swe/domio", "/swe/clark", "/swe/uptop"]);
  const creativePath = useRouteMatch("/creative/body");
  const style = (swePath || creativePath) ? { backgroundColor: background, backgroundImage: 'none' } : {}
  return (
    <div className="container" style={style}>
      <TopBar underlay={swePath != null || creativePath != null} />
      <SideBar underlay={creativePath != null} />
      <Switch>
        <Route path="/creative/body" component={Body} />
        <Route path="/creative/visual" component={Home} />
        <Route path="/creative/words" component={Home} />
        <Route path="/swe/domio"><Swe domio /></Route>
        <Route path="/swe/uptop"><Swe uptop /></Route>
        <Route path="/swe/clark"><Swe clark /></Route>
        <Route path="/learner/coursework"><Learner isCourse /></Route>
        <Route path="/learner/reading"><Learner /></Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}


export default withRouter(App);
