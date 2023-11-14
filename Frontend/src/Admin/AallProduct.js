import React, { useContext, useState } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useEffect } from "react";
import axiosInstance from "./Axios/axiosInstance";

export default function AallProduct() {
  
  const { item,removeItem} = useContext(MyData);
  const navigate=useNavigate();
  const [products,setProducts]=useState([])

  const fetchData =async ()=>{
    // const token = localStorage.getItem('jwtToken');
    try{
      const response = await axiosInstance.get('/api/admin/products')
      // console.log(response)
      // const response = await axios.get('http://localhost:8000/api/admin/products')
      if(response.status === 200){
      //  console.log("success")
        setProducts(response.data.data)
        return;
      }
    }
  
    catch(error){
      console.log(error.message)
  
    }


  
    }

useEffect(()=>{
  fetchData()
},[])  



const deleteProduct = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axiosInstance.delete(`/api/admin/products/${id}`);
        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          fetchData(); // Assuming fetchData is a function that fetches updated data
        }
      } catch (error) {
        console.log("error occurred: " + error.message);
        // Handle error as needed
        Swal.fire({
          title: "Error",
          text: "An error occurred while deleting the product.",
          icon: "error",
        });
      }
    }
  });
};

  



  
 

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
            <tr key={value._id}>
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
                <MDBBtn onClick={()=>navigate(`/Admin/ProductEdit/${value._id}`)}>EDIT</MDBBtn>
              </td>
              <td className="ps-0">
                <MDBBtn  color="danger" onClick={()=>deleteProduct(value._id)}>
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
