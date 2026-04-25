const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="d-flex justify-content-between mt-3">
      <button 
        className="btn btn-secondary" 
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(prev => prev - 1)}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button 
        className="btn btn-secondary" 
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(prev => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;