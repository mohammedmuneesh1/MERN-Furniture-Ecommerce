
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MyData } from "../Main-Component/MyData";
import { MDBBtn } from "mdb-react-ui-kit";
const ProductPage = () => {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, []);
  const { item,cart,setCart,lstatus} = useContext(MyData);
  const navigate = useNavigate();
  const { id } = useParams();




  const addtocart=(newItem)=>{

    const ItemExist = cart.filter(value => value.id === newItem.id);  //newItem.id-1 not given because onclick we already pass product[id-1]

    if(ItemExist.length === 0){
      setCart( [...cart,newItem])

    }
    else{
      navigate("/cart")
    }
  }

  return (
    <>
    
      <div className="details d-flex flex-column flex-md-row align-items-center pb-3">
        <div className="w-100 w-md-50 d-flex justify-content-center align-items-center">
          <img src={item[id - 1].src} alt="Product-img" />
        </div>
        <div className="d-flex flex-column w-100 w-md-50 text-black  me-5 ms-5 ">


          <h1 className="fw-bold mb-3 text-center">{item[id - 1].name}</h1>
          <h4 className="fw-bold mb-3 text-center">₹{item[id - 1].price}</h4>
          <hr />
          <p className="mt-3 text-justify mb-4 ms-2 me-2 " style={{textAlign:"justify"}}>{item[id - 1].description}</p>
          <div className="d-flex  justify-content-center gap-3 text-center mb-5">

            <div>
              <MDBBtn rounded color="dark" className="det-button"
              onClick={()=>lstatus?alert("login please"):addtocart(item[id-1])}>
                Add to Cart
              </MDBBtn>
            </div>
            <div>
              <MDBBtn
                rounded
                className="det-button"
                style={{ backgroundColor: "#ed6335" }}
              >
                Buy Now
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
