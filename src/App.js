import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);

const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */)
);
const Cast = lazy(() => import("./pages/Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("./pages/Reviews" /* webpackChunkName: "Reviews" */)
);

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
            exact
          >
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            MoviesPage
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path={`/movies/:movieId/cast`} component={Cast}></Route>
          <Route path={`/movies/:movieId/review`} component={Reviews}></Route>
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
