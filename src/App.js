
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import Achivement from './pages/Achivement/Achivement';
import ProcessType from './pages/ProcessType/ProcessType';
import ReportType from './pages/ReportType/ReportType';
import Login from './pages/Login/Login';
import { createBrowserHistory } from 'history'
import Role from './pages/Role/Role';
import Home from './pages/Home/Home';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Group from './pages/Groups/Group';
import GroupsDetail from './pages/GroupsDetail/GroupsDetail';
import Profile from './pages/Profile/Profile';
import BaiTapGameXucXac from './pages/BaiTapGameXucXac/BaiTapGameXucXac';
export const history = createBrowserHistory()

function App () {

  return (
    <Router history={history}>
      <Switch>
        {/* <AboutUniversity /> */}
        {/* <SignIn /> */}
        {/* <Home /> */}

        <AdminTemplate exact path="/achivement" Component={Achivement} />
        <AdminTemplate exact path="/processtype" Component={ProcessType} />
        <AdminTemplate exact path="/reporttype" Component={ReportType} />
        <AdminTemplate exact path="/role" Component={Role} />
        {/* <AdminTemplate exact path="/table" Component={Admin} /> */}
        <UserTemplate exact path="/home" Component={Home} />
        <UserTemplate exact path="/groups" Component={Group} />
        <UserTemplate exact path="/groupsdetail" Component={GroupsDetail} />
        <UserTemplate exact path="/profile" Component={Profile} />
        <UserTemplate exact path="/game" Component={BaiTapGameXucXac} />
        <Route exact path="/" component={Login} />

      </Switch>
    </Router>
  );
}

export default App;
