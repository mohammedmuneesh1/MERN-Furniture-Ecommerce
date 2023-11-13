
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MyData } from "../Main-Component/MyData";
import { MDBBtn } from "mdb-react-ui-kit";
import axiosInstance from "../Admin/Axios/axiosInstance";
import toast from "react-hot-toast"


const ProductPage = () => {
  useEffect(() => {
    pPage(); //reason to give pPage inside useEffect, once it give given outside the useEffect , backend corresponded function calling it indefinitly
    window.scrollTo(0, 0);

  }, []);


  const { item,cart,setCart,lstatus} = useContext(MyData);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product,setProduct] = useState(null);

  const pPage = async () =>{
    try{
      const response = await  axiosInstance.get(`/api/admin//products/${id}`)
      if(response.status === 200){
        setProduct(response.data.data)
      }
    }
    catch(error){
      console.log(error.message)
    }
  }

  const addToCart = async (pId)=>{
    const token = localStorage.getItem('jwtToken')
    const id = localStorage.getItem('id');
  
    if(token){
      const payload= {productId:pId}
    try{
       const response = await axiosInstance.post(`api/users/${id}/cart`,payload)
       if(response.status === 201){
        return toast.success("Product added to cart")
       }
    }
    catch(error){
       if (error.response.status === 409){
        // return alert("product already in your cart")
        navigate('/cart')
       }
      console.log(error)

    }
  }
  else{
    alert("Please Login Again");
  }
  }









  return (
    <div>
      {product ? (
        <>
       

     <div className="details d-flex flex-column flex-md-row align-items-center pb-3">
        <div className="w-100 w-md-50 d-flex justify-content-center align-items-center">
         <img src={product.image} alt="Product-img" />
       </div>
         <div className="d-flex flex-column w-100 w-md-50 text-black  me-5 ms-5 ">


        <h1 className="fw-bold mb-3 text-center">{product.title}</h1>
         <h4 className="fw-bold mb-3 text-center">₹{product.price}</h4>
        <hr />
          <p className="mt-3 text-justify mb-4 ms-2 me-2 " style={{textAlign:"justify"}}>{product.description}</p>
         <div className="d-flex  justify-content-center gap-3 text-center mb-5">

         <div>
            <MDBBtn rounded color="dark" className="det-button"
               onClick={()=>addToCart(product._id)}
            >
              ADD TO CART
             </MDBBtn>
       </div>
           <div>
            <MDBBtn
                rounded
                className="det-button"
                style={{ backgroundColor: "#ed6335" }}
             
              >
                BUY NOW
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>

        </>
      ) : null}
    </div>
  );











};

export default ProductPage;
