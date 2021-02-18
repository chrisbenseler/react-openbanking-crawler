import { useContext } from "react";
import { Link } from "react-router-dom";
import { InstitutionsContext } from "../InstitutionsContext";

function Institutions() {
  const [state] = useContext(InstitutionsContext);

  return (
    <section>
      <h2>Bancos</h2>
      <ul>
        {state.items.map((item) => (
          <li key={"item_" + item.id}>
            <Link to={"/institutions/" + item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Institutions;
