import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InstitutionsContext } from "../InstitutionsContext";

function Institution() {
  let { id } = useParams();
  const [state] = useContext(InstitutionsContext);
  const [current, setCurrent] = useState(null);
  
  useEffect(() => {
    setCurrent(state.items.find((item) => item.id === id))
  }, [state, id])
  return (
    <section>
      { current ? <h2>Detalhe de {current.name}</h2> : <div></div> }
    </section>
  );
}

export default Institution;
