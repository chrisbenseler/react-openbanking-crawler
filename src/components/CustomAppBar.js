import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Home from "@material-ui/icons/Home";
import { useHistory, useLocation } from "react-router-dom";

function CustomAppBar() {
  let history = useHistory();
  let location = useLocation();

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          {location.key ? (
            <IconButton
              onClick={() => history.goBack()}
              edge="start"
              color="inherit"
              aria-label="Voltar"
            >
              <ArrowBack />
            </IconButton>
          ) : (
            <IconButton edge="start" color="inherit">
              <Home />
            </IconButton>
          )}
          <Typography variant="h5" component="h1">
            Open Banking Brasil
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default CustomAppBar;
