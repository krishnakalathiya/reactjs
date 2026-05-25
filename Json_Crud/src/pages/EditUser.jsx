import React from "react";
import { useEffect , useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {

  const {id} = useParams()

  const navigate = useNavigate()

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")

  async function getSingleUser(){
    let res = await axios.get(`http://localhost:3000/users/${id}`)
    let data = res.data
    setName(data.name)
    setEmail(data.email)    
  }

  useEffect(() => {
    getSingleUser()
  }, [])

  const updateUser = async() => {

    let updatedUser = {
      name,
      email
    }

    let res = await axios.put(`http://localhost:3000/users/${id}`  , updatedUser)

    alert("User Updated!")
    navigate('/view')

  }


  return (
    <>
      <div>EditUser</div>
      <div className="flex justify-center h-screen items-center ">
        <form
          onSubmit={updateUser}
          className="bg-blue-500 p-6 text-white w-[500px]"
        >
          <div>
            <label htmlFor="name">Name</label>
            <br></br>
            <input
              className="p-4 border w-full"
              type="text"
              name="name"
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-6">
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              className="p-4 border w-full"
              type="email"
              name="email"
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-gray-600 w-full py-4">
            Edit User
          </button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
