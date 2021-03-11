import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { InstitutionsContext } from "../InstitutionsContext";

function Institutions() {
  const [state] = useContext(InstitutionsContext);

  return (
    <section>
      <Box my={2}>
        <Typography component="h2" variant="h3">Bancos</Typography>
      </Box>
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
