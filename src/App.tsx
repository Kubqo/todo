import React from 'react';
import LoginPage from './sites/loginPage';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from './sites/mainPage';
import Planner from './sites/planner';

function App() {
  return (
    <>
      <Switch>
        <Route path="/dashboard" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/planner" component={Planner} />

        <Route path="">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
}


export default App;
