import { useState, useContext, useEffect } from "react";

import { Navbar } from "@blueprintjs/core";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { listInstitutions } from './services/api'; 

import Router from './Router';

import {
  InstitutionsContext,
  InstitutionsProvider,
} from "./InstitutionsContext";



function App() {
  const [state, setState] = useState({ items: [], loaded: false });

  return (
    <InstitutionsProvider value={[state, setState]}>
      <Layout />
    </InstitutionsProvider>
  );
}

function Layout() {

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
      <Router />
    </section>
  );
}

export default App;
