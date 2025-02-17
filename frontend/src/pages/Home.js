import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import './Home.css'
import { toast } from 'react-toastify'

const Home = () => {
  const [data,setData] = useState([])
  useEffect(() =>{
    getUser()
  },[])

  const getUser =async() =>{
    const res = await axios.get("http://localhost:4000/users")
    if(res.status ===200){
      setData(res.data)
    }
  }
  
  const onDeleteUser = async(id) =>{
    if(window.confirm("are you want to delete user")){
       const res = await axios.delete(`http://localhost:4000/user/${id}`)
     if(res.status ===200){
      toast.success(res.data)
      getUser()
     }
  }
    }
   


  return (
    <div style={{marginTop:"150px"}}>
      <table className='styled-table' >
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>No</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Email</th>
            <th style={{textAlign:"center"}}>Contact</th>
            <th style={{textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item,index) =>{
            return (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td> {item.name} </td>
                <td> {item.email} </td>
                <td> {item.contact} </td>
                <td>
                  <Link to={`/update/${item.id}`}>
                  <button className='btn btn-edit'>Edit</button>
                  </Link>
                  <button className='btn btn-delete' onClick={()=>onDeleteUser(item.id)}>Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button className='btn btn-view'>View</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
     
    </div>
  )
}

export default Home
