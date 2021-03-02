import { useState, useContext, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import "normalize.css/normalize.css";
import 'fontsource-roboto';

import { listInstitutions } from "./services/api";

import Router from "./Router";

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
      <AppBar position="static">
        <h1>Open Banking Brasil</h1>
      </AppBar>
      <Router />
    </section>
  );
}

export default App;
