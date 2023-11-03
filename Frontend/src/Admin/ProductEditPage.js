import React, { useContext, useEffect, useState} from 'react'
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useNavigate, useParams } from 'react-router-dom';
import { MyData } from '../Main-Component/MyData';
import axiosInstance from './Axios/axiosInstance';

export default function ProductEditPage() {
  const navigate = useNavigate();
 const [product,setProduct] = useState();
  const {id}=useParams();
  const {item,setItem}=useContext(MyData);
  const arrindex=id-1;

  const productChk = async ()=>{
    try{
      const response = await axiosInstance.get(`/api/admin/products/${id}`);
      if(response.status === 200){
        setProduct(response.data.data);
          
      }
    }
    catch(error){
      console.log(error.message)

    }

  }








       const updateProduct = async(e,id)=>{
         e.preventDefault();
    const productId = id;
    const price = e.target.price.value.trim();
    const category = e.target.category.value;
    const title = e.target.title.value.trim();
    const description = e.target.description.value.trim();

    if(!price || !category || !title || !description) return alert("enter all field before proceeding");
    if(isNaN(price)) return alert("Enter digit Only for price");   

    const payload = {
      productId,price,category,title,description
    }
    try{
       const response = await axiosInstance.put('/api/admin/products',payload)
       console.log(response)
       if(response.status === 200){
        alert("Product Edited Successfully")
        navigate(-1)  //-1 for going back to previous route 
       }
    }
    catch(error){
      console.log(error.message)
    }


  }
      
useEffect(()=>{
  productChk();
},[]);

return(
  <div className='a-body'>
  <div className="pap mt-5">
    {!product ? ( 
      <p>Loading...</p>
    ) : (
      <form onSubmit={(e)=>updateProduct(e,product._id)}>
        <h3 className="text-center pt-5 mb-3">EDIT THE PRODUCT</h3>
        

         <MDBInput
          label="Product Name"
          htmlFor="form1"
          type="text"
          autoComplete="off"
          name="title"
          className="mb-4"
          defaultValue={product.title}
          required
        />

<MDBInput
          label="Product Description"
          htmlFor="form1"
          type="text"
          autoComplete="off"
          name="description"
          className="mb-4"
          defaultValue={product.price}
          required

        />


         <MDBInput
          label="Product Price"
          htmlFor="form1"
          type="text"
          autoComplete="off"
          name="price"
          className="mb-4"
          defaultValue={product.price}
          required

        />
        <select
          style={{
            width: "100%",
            height:"40px",
            outline: "none",
           background:"none"
          }}
          name="category"
          defaultValue={product.category}
          required  
        >
          <option value="ptype" disabled selected>P-Type</option>
          <option value="Sofa">Sofa</option>
          <option value="Bowl">Bowls</option>
          <option value="Lamps">Lamps</option>
          <option value="Plants">Plants</option>
          <option value="Mattress">Mattress</option>
          <option value="Appliances">Appliances</option>
        </select>
        <div className="d-flex justify-content-center ">
          <MDBBtn type="submit" className="mb-5" color="warning" >
            UPDATE        
          </MDBBtn>
        </div>
      </form>
)}
  </div>
</div>
)






        {/* <MDBInput
          
          htmlFor="form1"
          type="file"
          autoComplete="off"
          name="imgurl"
          className="mb-4"
          
        /> */}





    // const title = e.target.Pname.value;
    // console.log(title)
    // const price =e.target.Pprice.value.trim();
    // const category = e.target.Pcategory.value;

    // if(Number.NaN(price)){
    //   return alert("Enter valid digit as price ")
    // }





  // return (
  //   <div className="a-body">
  //   <div className="pap mt-5">
  //     <form>
  //       <h3 className="text-center pt-5 mb-3">ADD NEW PRODUCT</h3>
  //       <MDBInput
  //         label="Image URL"
  //         htmlFor="form1"
  //         type="text"
  //         autoComplete="off"
  //         name="imgurl"
  //         className="mb-4"
  //       />


  //       <MDBInput
  //         label="Product Name"
  //         htmlFor="form1"
  //         type="text"
  //         autoComplete="off"
  //         name="Pname"
  //         className="mb-4"
  //         defaultValue={product.title}
  //         required
  //       />




      




  //     </form>
  //   </div>
  // </div>
  // )
}












 // productId, title, description, ,
//     try{
//       const response = await axiosInstance.put('/api/admin/products')
//        console.log("hello")
//     }
//     catch(error){
// console.log(error.message)
//     }

  // const UpdateProduct=(e)=>{
  //   e.preventDefault();

  //   const UpdatedItem=[...item];

  //    UpdatedItem[arrindex]={
  //     ...UpdatedItem[arrindex],
  //     category:e.target.Pcategory.value,
  //     name:,
  //     src:e.target.imgurl.value,
  //     price:e.target.Pprice.value
  //   }
  //   setItem(UpdatedItem);


  // }