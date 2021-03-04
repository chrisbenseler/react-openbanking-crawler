import Typography from "@material-ui/core/Typography";
import { useContext, useEffect, useState } from "react";
import { InstitutionsContext } from "../InstitutionsContext";

function Subtitle({ id, component = "h3" }) {
  const [state] = useContext(InstitutionsContext);
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    setCurrent(state.items.find((item) => item.id === id));
  }, [state, id]);

  return <div>
      <Typography variant={component} component={component}>{ current ? current.name : "" }</Typography>
  </div>;
}

export default Subtitle;
