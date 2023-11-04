import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from "mdb-react-ui-kit";
import axiosInstance from "./Axios/axiosInstance";

export default function adminOrders(){
    const [data,setData] = useState([]);

    const orderDetails = async  ()=>{
        try{
            const response = await axiosInstance.get('/api/admin/orders')
            console.log(response)
            console.log("response ok" )
            if(response.status === 200){
                console.log(first)
            }

        }
        catch(error){
            console.log(error.message)

        }
    }
useEffect(()=>{orderDetails()},[])
    return(
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
    )
}