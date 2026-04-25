const Search = ({ setSearch, setCurrentPage }) => {
  return (
    <input 
      type="text" 
      className="form-control w-50" 
      placeholder="Search by name or email..." 
      onChange={(e) => {
        setSearch(e.target.value);
        setCurrentPage(1); // Reset to first page on search
      }}
    />
  );
};

export default Search;