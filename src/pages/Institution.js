import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory, useParams } from "react-router-dom";
import Subtitle from "../components/Subtitle";

function Institution() {
  let { id } = useParams();

  const history = useHistory();
  const linkTo = (segment) =>
    history.push(`${history.location.pathname}/${segment}`);

  return (
    <section>
      <Subtitle component={"h1"} id={id} />

      <ButtonGroup variant="contained" color="primary" aria-label="Empréstimos">
        <Button onClick={() => linkTo("personal-loans")}>Empréstimo PF</Button>
        <Button onClick={() => linkTo("business-loans")}>Empréstimo PJ</Button>
      </ButtonGroup>

      <ButtonGroup variant="contained" color="primary" aria-label="Empréstimos">
        <Button onClick={() => linkTo("personal-credit-cards")}>Cartão de Crédito PF</Button>
        <Button onClick={() => linkTo("business-loans")}>Cartão de Crédito PJ</Button>
      </ButtonGroup>

    </section>
  );
}

export default Institution;
