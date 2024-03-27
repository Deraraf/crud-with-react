import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import "./View.css"
import { toast } from 'react-toastify'
const View = () => {
const [user,setUser] = useState(null)

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
    setUser({...res.data[0]})
  }
}


  return (
    <div style={{marginTop:"150px"}}>
      <div className='card'>
          <div className='card-header'>
          <p>user contact detail</p>
          </div>
          <div className='container'>
            <strong>ID:</strong>
            <span>{id}</span>
            <br/>
            <br/>
            <strong>name:</strong>
            <span>{user && user.name}</span>
            <br/>
            <br/>
            <strong>email:</strong>
            <span>{user && user.email}</span>
            <br/>
            <br/>
            <strong>contact:</strong>
            <span>{user && user.contact}</span>
            <br/>
            <br/>
            <Link to={"/"}>
             <button className='btn btn-edit'>Go back</button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default View
