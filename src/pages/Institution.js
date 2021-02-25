import { useContext, useState, useEffect } from "react";
import { useParams, useHistory  } from "react-router-dom";
import { Button, ButtonGroup } from "@blueprintjs/core";

import { InstitutionsContext } from "../InstitutionsContext";

function Institution() {
  let { id } = useParams();
  const [state] = useContext(InstitutionsContext);
  const [current, setCurrent] = useState(null);


  useEffect(() => {
    setCurrent(state.items.find((item) => item.id === id));
  }, [state, id]);

  const history = useHistory();
  const linkTo = (segment) => history.push(`${history.location.pathname}/${segment}`)

  return (
    <section>
      {current ? (
        <div>
          <h2>Detalhe de {current.name}</h2>

          <section>
            <ButtonGroup>
              <Button onClick={() => linkTo('personal-loans')}>Empréstimo PF</Button>
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
