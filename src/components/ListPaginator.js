function ListPaginator({ pager, handleClick }) {
    return <footer>
    Página {pager.current}/{pager.total}
    { pager.total > 1 && pager.current != pager.total ? <div>
      <button onClick={handleClick}>mais</button>
    </div> : null }
  </footer>
}

export default ListPaginator;