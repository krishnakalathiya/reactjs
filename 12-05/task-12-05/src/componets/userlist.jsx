import { useSelector , useDispatch } from "react-redux";
import { fetchUsers } from "../users/userslice";
import { useEffect } from "react";

const UserList = () => {

  const dispatch = useDispatch()

  const {users , loading , error} = useSelector((state) => state.users)

  console.log(users);
  console.log(loading);
  console.log(error);

  useEffect(() => {
    console.log("useEffect called");
    dispatch(fetchUsers())
  } , [dispatch])


  return (
    <>
    <div>UserList</div>
    <div className="layout">
    {
      users.map((user) => {
        return(
          <>
          <div className="card">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          </>
        )
      })
    }
    </div>
    </>
  )
}

export default UserList