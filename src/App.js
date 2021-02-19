import { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "@blueprintjs/core";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { listInstitutions } from './services/api'; 

import {
  InstitutionsContext,
  InstitutionsProvider,
} from "./InstitutionsContext";

import Institutions from "./pages/Institutions";
import Institution from "./pages/Institution";

function App() {
  const [state, setState] = useState({ items: [], loaded: false });

  return (
    <InstitutionsProvider value={[state, setState]}>
      <Layout />
    </InstitutionsProvider>
  );
}


function Layout({ match }) {

  const [state, setState] = useContext(InstitutionsContext);
  
  useEffect(() => {
    (async () => {
      const items = await listInstitutions();
      setState({
        ...state,
        items,
        loaded: true,
      });
    })();
  }, []);


  return (
    <section>
      <Navbar>
        <h1>Open Banking Brasil</h1>
      </Navbar>
      <Router>
        <Switch>
          <Route path="*/institutions/:id">
            <Institution></Institution>
          </Route>
          <Route path="*/institutions">
            <Institutions></Institutions>
          </Route>
          <Route path="*/">
            <Institutions></Institutions>
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
