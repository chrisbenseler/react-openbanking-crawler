import { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { InstitutionsContext } from "../InstitutionsContext";
import Subtitle from "../components/Subtitle";

function Institution() {
  let { id } = useParams();

  const history = useHistory();
  const linkTo = (segment) =>
    history.push(`${history.location.pathname}/${segment}`);

  return (
    <section>
      <div>
        <Subtitle component={"h1"} id={id} />

        <section>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="Empréstimos"
          >
            <Button onClick={() => linkTo("personal-loans")}>
              Empréstimo PF
            </Button>
            <Button onClick={() => linkTo("business-loans")}>
              Empréstimo PJ
            </Button>
          </ButtonGroup>
        </section>
      </div>
    </section>
  );
}

export default Institution;
