import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "../GlobalStyles";
import ArtistRoute from "../ArtistRoute/ArtistRoute";
const DEFAULT_ARTIST_ID = "4RnBFZRiMLRyZy0AzzTg2C";

const App = () => {
  return (
    <Router>
      <Switch exact path="/">
        Daje Roma
      </Switch>
      <Switch>
        <Route path="/artist/:artistId">
          <ArtistRoute />
        </Route>
        <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
      </Switch>

      <GlobalStyles />
    </Router>
  );
};

export default App;
