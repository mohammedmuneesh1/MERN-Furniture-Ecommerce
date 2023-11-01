import React, { useContext, useState } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import { useEffect } from "react";
import axiosInstance from "./Axios/axiosInstance";

export default function AallProduct() {
  
  const { item,removeItem} = useContext(MyData);
  const navigate=useNavigate();
  const [products,setProducts]=useState([])

  
useEffect(()=>{
  const fetchData =async ()=>{
    
  try{
    const response = await axiosInstance.get('/api/admin/products')
    // const response = await axios.get('http://localhost:8000/api/admin/products')
    if(response.status === 200){
     console.log("success")
      setProducts(response.data.data)
    }
  }

  catch(error){
    console.log(error.message)

  }

  }
  fetchData()
},[])  
  



  
 

  return (
    <div className="a-body">
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">IMAGE</th>
            <th scope="col">NAME</th>
            <th scope="col">PRICE</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {products.map((value, index) => (
            <tr key={index}>
              <th scope="row">{value.id}</th>
              <td>
                <img
                  src={value.image}
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                  alt="productroundcircleImage"
                />
              </td>
              <td>{value.title}</td>
              <td>{value.price}</td>
              <td className="pe-0">
                <MDBBtn onClick={()=>navigate(`/Admin/ProductEdit/${value.id}`)}>EDIT</MDBBtn>
              </td>
              <td className="ps-0">
                <MDBBtn  color="danger" onClick={()=>removeItem(index)}>
                  DELETE
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
