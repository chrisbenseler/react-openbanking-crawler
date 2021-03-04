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
    <Router>
      <CustomAppBar />
      <Container maxWidth="md">
        <AppRouter />
      </Container>
    </Router>
  );
}

export default App;
