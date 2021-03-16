import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function ServicesFees({ services }) {
  return (
    <div>
      {services.map((service, i) => (
        <div key={`service_${i}`}>
          {service.name} ({service.code})
          <TableContainer component={Paper}>
            <Table aria-label="Faixas de preços">
              <TableHead>
                <TableRow>
                  <TableCell>Faixa 1</TableCell>
                  <TableCell>Faixa 2</TableCell>
                  <TableCell>Faixa 3</TableCell>
                  <TableCell>Faixa 4</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {service.prices.map((price, index) => (
                    <TableCell key={"price_" + index}>
                      {price.value} {price.currency}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colspan={4}>
                    Min/max: {`${service.minimum.value}/${service.maximum.value} ${service.minimum.currency}` } 
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
}

export default ServicesFees;
