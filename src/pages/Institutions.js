import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { InstitutionsContext } from "../InstitutionsContext";

function Institutions() {
  const [state] = useContext(InstitutionsContext);

  return (
    <section>
      <h2>Bancos</h2>
      <List>
        {state.items.map((item) => (
          <ListItem
            button
            key={"item_" + item.id}
            component={Link}
            to={"institutions/" + item.id}
            divider
          >
            <ListItemText>{item.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </section>
  );
}

export default Institutions;
