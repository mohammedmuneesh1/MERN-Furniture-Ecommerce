import React, { useContext, useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axiosInstance from '.././Admin/Axios/axiosInstance'
export default function Auser() {
    const [user,setUser] = useState([])
  const navigate=useNavigate();
    const userDetails = async ()=>{
    try{
      const response = await axiosInstance.get("/api/admin/users")
      if(response.status === 200){
      return  setUser(response.data.data)
  
      } 
    }
    catch(error){
      console.log(error.message)
    }
  }

useEffect(()=>{userDetails()},[])    









// return(
//   <h1>hello world</h1>
// )
// }    

  return (
    <>
      <div className="a-body">
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ORDER DETAILS</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {user.map((value, index) =>(
              <tr key={value._id}>
                <th>{value._id}</th>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td> <MDBBtn color='info' onClick={()=>navigate(`/Admin/OrderDetails/${value._id}`)}>
        Info
      </MDBBtn></td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}

