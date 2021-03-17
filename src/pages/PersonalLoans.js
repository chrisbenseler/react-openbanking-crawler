/* eslint-disable react-hooks/exhaustive-deps */
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListPaginator, ServicesFees, Subtitle } from "../components";
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
      <Subtitle id={id} component="h2" variant="h4" />
      <Box mb={2}>
        <Typography component="h3" variant="h5">Empréstimo - Pessoa Física</Typography>
      </Box>

      <Grid container spacing={3}>
        {personalLoans.map((p, index) => (
          <Grid item xs={12} md={6} key={p._id + "_" + index}>
            <Card>
              <CardContent>
                <Typography variant="h7" component="h6">
                  {p.type}
                </Typography>
                <ServicesFees services={p.fees.services} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ListPaginator
        pager={pager}
        handleClick={() => {
          setNextPage(pager.current + 1);
        }}
      />
    </section>
  );
}

export default PersonalLoans;
