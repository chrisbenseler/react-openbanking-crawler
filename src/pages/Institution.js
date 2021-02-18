import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { InstitutionsContext } from "../InstitutionsContext";

function Institution() {
  let { id } = useParams();
  const [state] = useContext(InstitutionsContext);
  console.log({ state, id });
  const [current] = useState(state.items.find((item) => item.id === parseInt(id)));

  return (
    <section>
      { current ? <h2>Detalhe de {current.name}</h2> : <div></div> }
    </section>
  );
}

export default Institution;
