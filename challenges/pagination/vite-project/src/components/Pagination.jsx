const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    let pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, "...", currentPage, "...", totalPages];
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pageNumbers.map((num, index) =>
        num === "..." ? (
          <span key={index} className="ellipsis">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`pagination-btn ${currentPage === num ? "active" : ""}`}
            onClick={() => onPageChange(num)}
          >
            {num}
          </button>
        )
      )}

      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
