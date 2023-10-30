import React, { useContext, useEffect } from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,

    MDBRipple,
  } from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';
import { MyData } from '../MyData';

export default function Lamps() {
    useEffect(() => {
        window.scrollTo(0, 0);
         }, []);
    const navigate=useNavigate();
      const {item}=useContext(MyData);
       const Psofa=item.filter((value)=>value.category ==="Appliances");
  return (
    <>
     <MDBContainer fluid className="my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Lamps</strong>
        </h4>

        <MDBRow>


  {Psofa.map((value,index) => (
    
    <MDBCol xl="3" lg="4" md="6" sm="6" xs="12" className="mb-4"   key={value.id}>
    <MDBCard className=" card-size m-auto"   key={value.id}    onClick={()=>navigate(`/Product/${value.id}`)} >
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image rounded hover-zoom"
        
        >
          <div className="image-container">
            <MDBCardImage
              src={value.src}
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
            {value.name}
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
