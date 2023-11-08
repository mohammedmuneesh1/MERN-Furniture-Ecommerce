import {
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle, // Add import for MDBCardTitle
} from "mdb-react-ui-kit";

import { MyData } from "../Main-Component/MyData";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Admin/Axios/axiosInstance";
const Items = () => {
  const navigate = useNavigate();
  const { item,token,userId,setClose,close} = useContext(MyData);
  const disP = item.slice(0, 8); // to display the first 8 products only
  const [products,setProducts] =useState();
  const [wishlist,setWishlist]=useState([]);


  const wishlistFn =async ()=>{
    if(token){
      const id = userId
      try{
        const response = await axiosInstance.get(`/api/users/${id}/wishlist`);
        if(response.status === 200){
          return setWishlist(response.data.wishlist)
        }
      }
      catch(error){
        console.log(error)
      }
    }
  }

const displayProducts = async () => {
  try {
    const response = await axiosInstance.get('/api/admin/products');
   
    if (response.status === 200) {
      setProducts(response.data.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};



const addToWishlist = async(pId)=>{
  if(token){
    const id = userId
    const payload = {productId:pId}
    try{
   const response = await axiosInstance.post(`/api/users/${id}/wishlist`,payload)
   if(response.status === 200){
    wishlistFn();
   }
    }
    catch(error){
      if(error.response.status === 409){
        alert("The Product Already in your cart. ")
      }
    }
  }
  else{
    setClose(!close)
  }
  
  }
  
const removeToWishlist = async(pId)=>{
  console.log("first")
  if(token){
    const id = userId
    try{
   const response = await axiosInstance.delete(`/api/users/${id}/wishlist/${pId}`)
   console.log(response)
   if(response.status === 200){
    wishlistFn();
    
   }
    }
    catch(error){
      if(error.response.status === 409){
        alert("The Product Already in your cart. ")
      }
    }
  }
  else{
    setClose(!close)
  }
  
  }







  useEffect(() => {
    displayProducts();
    wishlistFn();
  }, []);
  
  




  const handlePrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("en-IN"); // 'en-IN' for the Indian numbering system (e.g., 1,23,456.00)
    return "₹" + formattedPrice;
  };

  return (
    <>
      <section className="products d-flex flex-column align-items-center">
        <h1 className="mt-5 text-black fw-bolder">
          <strong>Bestsellers</strong>
        </h1>

        <MDBContainer fluid className="my-5">
          <MDBRow className="best-seller d-flex flex-wrap justify-content-center mx-5">
          {products && products.slice(0,8).map((value, index) => (
              <MDBCol
                xl="3"
                lg="4"
                md="4"
                sm="6"
                className="mb-3 best-seller-image"
                key={value._id}
                 // Fix the onClick here
              >
                {wishlist && wishlist.find(wvalue=>wvalue._id === value._id )?
                <>
                <MDBCard className="text-black">
                <MDBIcon className="heart-icon"  fas icon="heart" style={{color:"red"}}  onClick={()=>removeToWishlist(value._id)}/>
                  <MDBCardImage
                    src={value.image}
                    position="top"
                    alt="product-image"
                    onClick={() => navigate(`/Product/${value._id}`)}
                  />
                  <MDBCardBody  onClick={() => navigate(`/Product/${value._id}`)}>
                    <div className=" text-center">
                      <MDBCardTitle className="best-seller-name fw-bold">
                        {value.title}
                      </MDBCardTitle>
                    </div>
                    <h3 className=" text-muted card-category" style={{ textAlign: 'center' }}>
  {value.category}
</h3>
                    <p
                      className="text-center fw-bolder fs-5"
                      style={{ color: "#ed2335" }}
                    >
                      {handlePrice(value.price)} {/* Use the handlePrice function here */}
                    </p>
                  </MDBCardBody>
                </MDBCard>
                </>
                :
                
                <MDBCard className="text-black">
                <MDBIcon className="heart-icon"  fas icon="heart"    onClick={(e)=>{ e.preventDefault(); addToWishlist(value._id)}}/>
                  <MDBCardImage
                    src={value.image}
                    position="top"
                    alt="product-image"
                    onClick={() => navigate(`/Product/${value._id}`)}
                  />
                  <MDBCardBody  onClick={() => navigate(`/Product/${value._id}`)}>
                    <div className=" text-center">
                      <MDBCardTitle className="best-seller-name fw-bold">
                        {value.title}
                      </MDBCardTitle>
                    </div>
                    <h3 className=" text-muted card-category" style={{ textAlign: 'center' }}>
  {value.category}
</h3>
                    <p
                      className="text-center fw-bolder fs-5"
                      style={{ color: "#ed2335" }}
                    >
                      {handlePrice(value.price)} {/* Use the handlePrice function here */}
                    </p>
                  </MDBCardBody>
                </MDBCard>}
                
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Items;
