import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { MyData } from '../MyData';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Admin/Axios/axiosInstance';
export default function Sofa() {
 
let data = [];

const navigate=useNavigate();
  const {item}=useContext(MyData);
   const Psofa=item.filter((value)=>value.category ==="Sofa");


  const cSofa = async ()=>{
// console.log(token);



    try{
      // const  response = await axiosInstance.get('/api/admin/category?type=sofa');
      // const response = await axios.get('http://localhost:8000/api/admin/products/category?type=sofa', {
      //   headers: {
      //     Authorization: `Bearer ${token}`, // Set the Authorization header with the JWT token
      //   },
      // });
      const response = await axios.get("http://localhost:8000/api/admin/products/category?type=Sofa")
  
      if(response.status === 200){
           data = response.data.data
      }

    }
    catch(error){ 
      console.log("error sofa category" + error.message)
    }

  }
  

   useEffect(() => {
    window.scrollTo(0, 0);
    cSofa();
     }, []);

console.log(data)

  return (
    <>
     <MDBContainer fluid className="my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Sofa</strong>
        </h4>

        <MDBRow>


  {data.length !==0 && data.map((value,index) => (
    
    <MDBCol xl="3" lg="4" md="6" sm="6" xs="12" className="mb-4"   key={value._id}>
    <MDBCard className=" card-size m-auto"   key={value._id}    onClick={()=>navigate(`/Product/${value._id}`)} >
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom"
        
        >
          <div className="image-container">
            <MDBCardImage
              src={value.image}
              fluid
              className="w-100 custom-image"
              alt="Product"
            />
          </div>
          <span>
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                <h5>
                  <span className="badge bg-primary ms-2">New</span>
                </h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </div>
            </span>
        </MDBRipple>
        <MDBCardBody className="custom-card-body p-1 p-md-3 p-lg-4">
          <span  className="text-reset">
            <h5 className="card-title mb-2 mb-md-3 mb-lg-3 h5-responsive">
            {value.title}
            </h5>
          </span>
          <span  className="text-reset">
            <p className="mb-2 mb-lg-4 text-muted card-category " >{value.category}</p>
          </span>
          <h6 className="mb-2 card-price"><b>₹</b>{value.price}</h6>
        </MDBCardBody>
      </MDBCard>

    </MDBCol>



  ))}

        </MDBRow>
      </MDBContainer>
    </>
  )
}
