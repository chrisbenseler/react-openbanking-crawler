import { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { InstitutionsContext } from "../InstitutionsContext";

function Institution() {
  let { id } = useParams();
  const [state] = useContext(InstitutionsContext);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    setCurrent(state.items.find((item) => item.id === id));
  }, [state, id]);

  const history = useHistory();
  const linkTo = (segment) =>
    history.push(`${history.location.pathname}/${segment}`);

  return (
    <section>
      {current ? (
        <div>
          <h2>Detalhe de {current.name}</h2>

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
      ) : (
        <div></div>
      )}
    </section>
  );
}

export default Institution;
