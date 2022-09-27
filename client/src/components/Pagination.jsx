import "./Pagination.css";

const Pagination = ({ page, pages, changePage }) => {
  let paginationItemsArray = [...Array(pages).keys()];

  if (page >= 5) {
    paginationItemsArray = paginationItemsArray.slice(5);
  }

  return (
    pages > 1 && (
      <div className="pagination">
        <button
          className="pagination__prev"
          onClick={() => changePage((page) => page - 1)}
          disabled={page === 0}
        >
          &#171;
        </button>
        {page >= 5 && (
          <>
            <button onClick={() => changePage(1)} disabled={page === 1}>
              1
            </button>
            <button>...</button>
          </>
        )}
        {paginationItemsArray.map((currPage) => (
          <>
            <button
              onClick={() => changePage(currPage)}
              disabled={page === currPage}
            >
              {currPage + 1}
            </button>
          </>
        ))}
        <button
          className="pagination__next"
          onClick={() => changePage((page) => page + 1)}
          disabled={page === pages - 1}
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;
