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
      loaded: true
    });
  };

  return <button onClick={handleLoad}>Load!</button>;
}

function Layout() {
  return (
    <section>
      <div className="App">
        <header>Open Banking Brasil</header>
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
      </div>
    </section>
  );
}

export default App;
