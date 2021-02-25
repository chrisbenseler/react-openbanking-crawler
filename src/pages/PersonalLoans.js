import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      const result = await listPersonalLoansFromInstitution(id);
      setPersonalLoans([...personalLoans, ...result.personalLoans]);
      setPager(result.pagination);
    })();
  }, [id, nextPage]);

  return (
    <section>
      <h2>Empréstimo - Pessoa Física</h2>
      <table className={"bp3-html-table"}>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Termos e Condições</th>
          </tr>
        </thead>
        <tbody>
          {personalLoans.map((p, index) => (
            <tr key={p._id + "_" + index}>
              <td>{p.type}</td>
              <td>{p.termsConditions}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        Página {pager.current}/{pager.total}
      </footer>
    </section>
  );
}

export default PersonalLoans;
