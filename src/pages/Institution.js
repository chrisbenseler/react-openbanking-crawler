import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useHistory, useParams } from "react-router-dom";
import Subtitle from "../components/Subtitle";

const useStyles = makeStyles({
  gridItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});

function Institution() {
  let { id } = useParams();

  const history = useHistory();
  const linkTo = (segment) =>
    history.push(`${history.location.pathname}/${segment}`);

  const classes = useStyles();

  return (
    <section>
      <Subtitle component="h2" variant={"h4"} id={id} />

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs className={classes.gridItem}>
          <Typography component="h3" variant="h5">
            Empréstimo
          </Typography>

          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="Empréstimos"
          >
            <Button onClick={() => linkTo("personal-loans")}>PF</Button>
            <Button onClick={() => linkTo("business-loans")}>PJ</Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs className={classes.gridItem}>
          <Typography component="h3" variant="h5">
            Cartão de Crédito
          </Typography>

          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="Empréstimos"
          >
            <Button onClick={() => linkTo("personal-credit-cards")}>PF</Button>
            <Button onClick={() => linkTo("business-loans")}>PJ</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </section>
  );
}

export default Institution;
