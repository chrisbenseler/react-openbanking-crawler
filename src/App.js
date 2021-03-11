/* eslint-disable react-hooks/exhaustive-deps */
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "fontsource-roboto";
import "normalize.css/normalize.css";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import CustomAppBar from "./components/CustomAppBar";
import {
  InstitutionsContext,
  InstitutionsProvider
} from "./InstitutionsContext";
import { listInstitutions } from "./services/api";

function App() {
  const [state, setState] = useState({
    items: [],
    loaded: false,
    selectedId: null,
  });

  const theme = buildTheme();

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
        items: items.sort((a, b) => (a.name > b.name ? 1 : -1)),
        loaded: true,
      });
    })();
  }, []);

  return (
    <Router>
      <CustomAppBar />
      <Container maxWidth="md">
        <AppRouter />
      </Container>
    </Router>
  );
}

const buildTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: "#1a237e",
      },
    },
  });

export default App;
