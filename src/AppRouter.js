import {
  Route, Switch
} from "react-router-dom";
import Institution from "./pages/Institution";
import Institutions from "./pages/Institutions";
import PersonalCreditCards from "./pages/PersonalCreditCards";
import PersonalLoans from "./pages/PersonalLoans";

function AppRouter() {

  
  return (
    <Switch>
      <Route path="*/institutions/:id/personal-loans">
        <PersonalLoans></PersonalLoans>
      </Route>
      <Route path="*/institutions/:id/personal-credit-cards">
        <PersonalCreditCards></PersonalCreditCards>
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
