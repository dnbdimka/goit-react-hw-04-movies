import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movies/:id">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
