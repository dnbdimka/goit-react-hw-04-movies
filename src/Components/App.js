import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./navigation/Navigation";
// import HomePage from "./pages/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MoviesPage from "./pages/MoviesPage";
// import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() =>
  import("./pages/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage.js" /* webpackChunkName: "not-found-page" */)
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
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
      </Suspense>
    </>
  );
};

export default App;
