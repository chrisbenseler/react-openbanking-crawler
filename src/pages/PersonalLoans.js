import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ServicesFees from "../components/ServicesFees";

import { listPersonalLoansFromInstitution } from "../services/api";

function PersonalLoans() {
  const [personalLoans, setPersonalLoans] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [pager, setPager] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setNextPage(1);
    })();
  }, [id]);

  useEffect(() => {
    if (!nextPage) {
      return;
    }
    (async () => {
      const result = await listPersonalLoansFromInstitution(id, nextPage);
      setPersonalLoans([...personalLoans, ...result.personalLoans]);
      setPager(result.pagination);
    })();
  }, [id, nextPage]);

  return (
    <section>
      <h2>Empréstimo - Pessoa Física</h2>

      <Grid container spacing={3}>
      {personalLoans.map((p, index) => (
        <Grid item xs={6}>
        <Card key={p._id + "_" + index}>
          <CardContent>
            <Typography variant="span" component="h2">{p.type}</Typography>
            <ServicesFees services={p.fees.services} />
          </CardContent>
        </Card>
        </Grid>
      ))}
      </Grid>
      
      <footer>
        Página {pager.current}/{pager.total}
      </footer>
    </section>
  );
}

export default PersonalLoans;
