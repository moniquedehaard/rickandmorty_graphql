import React from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import { Navbar, Loading } from "../components";

// PAGE COMPONENTS
import {
  HomePage,
  CharacterSearchPage,
  CharacterDetailPage,
  CharacterListPage,
  NotFoundPage,
} from "../pages";

// STYLES
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/search"
          render={(RouterProps) => <CharacterSearchPage {...RouterProps} />}
        />
        <Route exact path="/characters" component={CharacterListPage} />
        <Route
          exact
          path="/characters/:id"
          render={(RouterProps) => <CharacterDetailPage {...RouterProps} />}
        />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
