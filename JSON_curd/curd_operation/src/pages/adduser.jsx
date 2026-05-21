import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const AddUser = () => {

  const[name , setName] = useState("")
  const [email , setEmail] = useState("")


  async function addUser(){
    let user = {
      name,
      email
    }

    await axios.post("http://localhost:3000/users" , user)
  }


  return (
    <>
    <div>AddUser</div>
    <form >
      <label htmlFor="name">Name</label>
      <input type="text" name="" id="" />
      <label htmlFor="email">Email</label>
      <input type="email" name="" id="" />
    </form>
    </>
  )
}

export default AddUser