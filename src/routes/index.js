import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { Add } from '../views/add';
import { Contacts } from '../views/contacts';
import { Edit } from '../views/edit';
import { Home } from '../views/home';
import { Layout } from "../layout";
import React from "react";
import history from "../providers/history.js";

export const Routes = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/home" children={<Home />} />
          <Route exact path="/contacts" children={<Contacts />} />
          <Route exact path="/add" children={<Add />} />
          <Route exact path="/edit/:id" children={<Edit />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Layout>
    </Router>
  );
};
