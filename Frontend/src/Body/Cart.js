import React, { useContext, useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData"; // Importing context for data sharing
import { useNavigate } from "react-router-dom"; // Importing navigation hook
import { v4 as uuidv4 } from 'uuid'; // Importing UUID library for generating unique identifiers
import axiosInstance from "../Admin/Axios/axiosInstance";

export default function Cart() {
  // Accessing data from the context
  const {  user, setUser, displayname } = useContext(MyData);
   const [cart,setCart] = useState([])
  // Initializing the navigation hook
  const navigate = useNavigate();
 
  // Scroll to the top of the page when the component mounts

  const cartItems = async ()=>{
    const id = localStorage.getItem('id')
    try{
      const response = await axiosInstance.get(`/api/users/${id}/cart`)
      if(response.status === 200){
        return setCart(response.data.data) 
      }
    }
      catch(error){
        console.log(error)
      }
  }

  useEffect(() => {
    cartItems();
    window.scrollTo(0, 0);
  }, []);


  const removeProduct = async (itemId,itemName) => {
    const id = localStorage.getItem('id');
    const confirm = window.confirm(`Are You Sure Want to Remove " ${itemName.toUpperCase()} " from your Cart ? `)
    if(confirm){
    try{
      const response = await axiosInstance.delete(`/api/users/${id}/cart/${itemId}`)
      console.log(response)
      if(response.status === 200){
        return cartItems();
      }
    }
    catch(error){
      console.log(error.message)
    }
  }
  }












  // Function to increase quantity of a product in the cart
  const qtyplus = (itemId) => {
    const cartPlus = cart.map((value) => {
      if (value.id === parseInt(itemId)) {
        return { ...value, quantity: value.quantity + 1 };
      }
      return value;
    });
    setCart(cartPlus);
  };

  // Function to decrease quantity of a product in the cart
  const qtyminus = (itemId) => {
    const cartMinus = cart.map((value) => {
      if (value.id === parseInt(itemId) && value.quantity > 1) {
        return { ...value, quantity: value.quantity - 1 };
      }
      return value;
    });
    setCart(cartMinus);
  };

  // Calculate the total price of items in the cart
  const totalPrice = cart && cart.length > 0
    ? cart.reduce((total, value) => {
        return total + value.price * value.quantity;
      }, 0)
    : 0;

  // Function to remove a product from the cart


  // Function to update orders and user profiles when placing an order
  
  const orderupdate = (e) => {
    e.preventDefault();
    if (cart.length !== 0) {
      const Orderdetails = cart.map((value, index) => ({
        Oid: uuidv4(), // Generate a unique order ID
        Opname: value.name,
        Oqty: value.quantity,
        Opprice: value.price,
      }));
    
      const Profilechk = user.map((value) => {
        if (value.name === displayname) {
          return {
            ...value,
            order: [...value.order, ...Orderdetails],
          };
        }
        return value;
      });

      setUser(Profilechk);
      alert("Order placed Successfully");
      setCart([]);
    } else {
      alert("Cart is empty");
    }
  };


  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="h-100 py-5">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard
                className="shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="text-black">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Your products
                      </MDBTypography>

                      {cart && cart.map((item) => (
                        <div  key={item._id} className="d-flex align-items-center mb-5">
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              src={item.image}
                              fluid
                              style={{ width: "150px" }}
                              alt="Generic placeholder image"
                            />
                          </div>

                          <div className="flex-grow-1 ms-3">
                            <span  className="float-end text-black">
                              <MDBIcon fas icon="times" onClick={()=>removeProduct(item._id,item.title)} />
                            </span>
                            <MDBTypography tag="h4" className="text-primary">
                              {item.title}
                            </MDBTypography>
                            <MDBTypography
                              tag="h6"
                              style={{ color: "#9e9e9e" }}
                            >
                              {/* Color: red */}
                            </MDBTypography>

                            <div className="d-flex align-items-center">
                              <p className=" fs-5 fw-bold mb-0 me-5 pe-3">
                                {item.price}
                              </p>

                              <div className="def-number-input number-input safari_only">
                                <button
                                  className="minus"
                                  onClick={() => qtyminus(item._id)}
                                ></button>
                                <input
                                  className="quantity fw-bold text-black"
                                  min={1}
                                  value={item.quantity}
                                  type="number"
                                  disabled
                                />
                                <button
                                  className="plus"
                                  onClick={() => qtyplus(item.id)}
                                ></button>
                              </div>
                              {/* <p>{item.description}</p> */}
                            </div>
                          </div>
                        </div>
                      ))}







                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />

                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">95$</p>
                      </div>
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          Total:
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          {totalPrice}
                        </MDBTypography>
                      </div>
                    </MDBCol>
                    <MDBCol lg="5" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase"
                      >
                        Payment
                      </MDBTypography>

                      <form className="mb-5" onSubmit={orderupdate}>
                        <MDBInput
                          className="mb-5"
                          label="Card number"
                          type="text"
                          size="lg"
             
                        />

                        <MDBInput
                          className="mb-5"
                          label="Name on card"
                          type="text"
                          size="lg"
                   
                        />

                        <MDBRow>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Expiration"
                              type="text"
                              size="lg"
                              minLength="7"
                              maxLength="7"
                           
                              placeholder="MM/YYYY"
                            />
                          </MDBCol>
                          <MDBCol md="6" className="mb-5">
                            <MDBInput
                              className="mb-4"
                              label="Cvv"
                              type="text"
                              size="lg"
                              minLength="3"
                              maxLength="3"
                              placeholder="&#9679;&#9679;&#9679;"
                             
                            />
                          </MDBCol>
                        </MDBRow>

                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit
                          <a href="#!"> obcaecati sapiente</a>.
                        </p>

                        <MDBBtn block size="lg" type="submit">
                          Buy now
                        </MDBBtn>

                        <MDBTypography
                          tag="h5"
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}
                        >
                          <span onClick={()=>navigate("/")}>
                            <MDBIcon fas icon="angle-left me-2" />
                            Back to shopping
                          </span>
                        </MDBTypography>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}
