import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function ListPaginator({ pager, handleClick }) {
  return (
    <footer>
      Página {pager.current}/{pager.total}
      {pager.total > 1 && pager.current !== pager.total ? (
        <div>
          <Fab onClick={handleClick} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
      ) : null}
    </footer>
  );
}

export default ListPaginator;
