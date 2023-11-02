import React, { useContext, useEffect, useState } from 'react'
import {MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MyData } from "../../Main-Component/MyData";
import axiosInstance from '../Axios/axiosInstance';
import { useNavigate } from 'react-router-dom';


export default function Aappliances() {
    const navigate = useNavigate();
    const { item ,removeItem} = useContext(MyData);
    const [product,setProduct] = useState([]);

    const Category = async () => {
      try{
        const response = await axiosInstance.get("/api/admin/products/category?type=Appliances")
        console.log(response)
        if(response.status === 200){
          setProduct(response.data.data)

        }
      }
      catch(error){
        console.log(error.message)
      }
    }

    
    
    
    
        const pDelete = async(id)=>{

          const confirm = window.confirm("Product deletion, are you sure?")
          if(confirm){
          try{
            const response = await axiosInstance.delete(`api/admin/products/${id}`)
            if(response.status === 200){
              alert("Product ddeleted successfully")
              Category();
            }
          }
          catch(error){
            console.log(error.message)
          }
        }
      }
      
      
      
      
      
      
      useEffect(()=>{
        Category();
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

      {product.map((value, index) => (
  <tr key={value._id}>
    <th scope="row">{value._id}</th>
    <td>
      <img
        src={value.image}
        style={{ width: "45px", height: "45px" }}
        className="rounded-circle"
        alt="applianceImage"
      />
    </td>
    <td>{value.title.slice(0,40)}</td>
    <td>{value.price}</td>
    <td className="pe-0">
      <MDBBtn onClick={()=>navigate(`/Admin/ProductEdit/${value._id}`)}>EDIT</MDBBtn>
    </td>
    <td className="ps-0">
      <MDBBtn color="danger" onClick={()=>pDelete(value._id)}>
        DELETE
      </MDBBtn>
    </td>
  </tr>
))};

        
          
        
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}
