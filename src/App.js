import { Navbar, Button } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

import { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  InstitutionsContext,
  InstitutionsProvider,
} from "./InstitutionsContext";

import Institutions from "./pages/Institutions";
import Institution from "./pages/Institution";

import "./App.css";

function App() {
  const [state, setState] = useState({ items: [], loaded: false });

  return (
    <InstitutionsProvider value={[state, setState]}>
      <Loader />
      <Layout />
    </InstitutionsProvider>
  );
}

function Loader() {
  const [state, setState] = useContext(InstitutionsContext);
  const handleLoad = () => {
    setState({
      ...state,
      items: [
        { name: "banco 1", id: 1 },
        { name: "banco 2", id: 2 },
        { name: "banco 3", id: 3 },
      ],
      loaded: true,
    });
  };

  return <Button icon="refresh" onClick={handleLoad}>Load!</Button>;
}

function Layout() {
  return (
    <section>
      <Navbar>Open Banking Brasil</Navbar>
      <Router>
        <Switch>
          <Route path="/institutions/:id">
            <Institution></Institution>
          </Route>
          <Route path="/">
            <Institutions></Institutions>
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
