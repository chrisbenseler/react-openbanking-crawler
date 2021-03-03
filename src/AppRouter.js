import {
  Switch,
  Route
} from "react-router-dom";
import Institutions from "./pages/Institutions";
import Institution from "./pages/Institution";
import PersonalLoans from "./pages/PersonalLoans";

function AppRouter() {

  
  return (
    <Switch>
      <Route path="*/institutions/:id/personal-loans">
        <PersonalLoans></PersonalLoans>
      </Route>
      <Route path="*/institutions/:id">
        <Institution></Institution>
      </Route>
      <Route path="*/institutions">
        <Institutions></Institutions>
      </Route>
      <Route path="*/">
        <Institutions></Institutions>
      </Route>
    </Switch>
  );
}

export default AppRouter;
