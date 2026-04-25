const Table = ({ users }) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover border">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2">Edit</button> [cite: 84]
                <button className="btn btn-sm btn-outline-danger">Delete</button> [cite: 85]
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;