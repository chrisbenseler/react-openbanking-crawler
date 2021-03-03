import { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "normalize.css/normalize.css";
import "fontsource-roboto";

import { listInstitutions } from "./services/api";

import AppRouter from "./AppRouter";

import {
  InstitutionsContext,
  InstitutionsProvider,
} from "./InstitutionsContext";

function App() {
  const [state, setState] = useState({
    items: [],
    loaded: false,
    selectedId: null,
  });

  const theme = createMuiTheme();
  theme.typography.h1 = {
    fontSize: "2.5rem",
  };

  return (
    <InstitutionsProvider value={[state, setState]}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
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
        <Toolbar>
          <Typography variant="h1">Open Banking Brasil</Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <Container maxWidth="md">
          <AppRouter />
        </Container>
      </Router>
    </section>
  );
}

export default App;
