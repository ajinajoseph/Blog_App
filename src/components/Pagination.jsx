function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="pagination">

      <button
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        disabled={currentPage === 1}
      >
        ←
      </button>

      <span className="page-number">
        Page {currentPage}
      </span>

      <button
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        disabled={currentPage === totalPages}
      >
        →
      </button>

    </div>
  );
}

export default Pagination;