import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";

import Login from "../views/Login";
import ListAnime from "../views/ListAnime";
import FavoriteList from "../views/FavoriteList";
// import Characters from "../screens/characters";
// import Favorites from "../screens/favorites";
// import Navigation from "../components/navigation";
// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "./themes";
// import { useState } from "react";
// import CharacterDetails from "../screens/characterDetails";

const Routes = () => {
  return (
    <Router>
      {/* <Navigation/> */}
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <PrivateRoute exact path="/list">
          <ListAnime></ListAnime>
        </PrivateRoute>
        <PrivateRoute path="/favorites">
          <FavoriteList></FavoriteList>
        </PrivateRoute>
        {/* <PrivateRoute path="/favorites">
            <Favorites></Favorites>
          </PrivateRoute> */}
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  );
};

function PrivateRoute({ children, ...rest }) {
  const isToken = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default Routes;
