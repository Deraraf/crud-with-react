import React,{useEffect, useState} from 'react'
import {useNavigate, useParams  } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './AddEdit.css'

const initialState = {
  name:"",
  email:"",
  contact:""

};
const AddEdit = () => {
const [state,setState] = useState(initialState)

const {name,email,contact} = state;

const navigation = useNavigate();

const {id} = useParams()

useEffect(()=>{
  if(id){
    getSingleUser(id)
  }
},[id])

const getSingleUser = async(id) =>{
  const res = await axios.get(`http://localhost:4000/user/${id}`)
  if(res.status === 200){
    toast.success(res.data)
    setState({...res.data[0]})
  }
}

 const addUser = async(data) =>{
  const res = await axios.post('http://localhost:4000/user',data)
  if(res.status === 200){
    toast.success(res.data)
  }else{
    toast.error(res.data)
  }
 }
 const updateUser = async(data,id) =>{
  const res = await axios.put(`http://localhost:4000/user/${id}`,data)
  if(res.status === 200){
    toast.success(res.data)
  }
 }

const handleSubmit = (e) =>{
  e.preventDefault()
  if(!name || !email || !contact){
    toast.error("Please provide value into each fields");
  }else{
    if(!id){
        addUser(state)
        setTimeout(() => navigation('/'), 500)
    }else{
      updateUser(state,id)
      setTimeout(() => navigation('/'), 500)
    }
 
}

}

const handelChange = (e) =>{
  e.preventDefault();
  let {name,value} = e.target;
  setState({...state,[name]:value})
}

  return (
    <div style={{marginTop:"100px"}}>
      <form style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"

      }} onSubmit={handleSubmit}>
        <label htmlFor='name'>name</label>
        <input type='text' id='name'
         name='name' 
         placeholder='Enter name ...' 
         onChange={handelChange}
          value={name} />
        <label htmlFor='email'>email</label>
        <input type='email' id='email'
         name='email' 
         placeholder='Enter name ...' 
         onChange={handelChange}
          value={email} />
        <label htmlFor='contact'>contact</label>
        <input type='text' id='contact'
         name='contact' 
         placeholder='Enter contact No ...' 
         onChange={handelChange}
          value={contact} />
        <input type='submit' value={id ? "update" : "add"} />
      </form>
      
    </div>
  )
}

export default AddEdit
