import React, { useContext, useEffect, useRef, useState} from 'react'
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useNavigate, useParams } from 'react-router-dom';
import { MyData } from '../Main-Component/MyData';
import axiosInstance from './Axios/axiosInstance';

export default function ProductEditPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef();
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
         const image = fileInputRef.current.files[0];
         const imgurl = e.target.imgurl.value.trim();
    const productId = id;
    const price = e.target.price.value.trim();
    const category = e.target.category.value;
    const title = e.target.title.value.trim();
    const description = e.target.description.value.trim();

    if (image && imgurl) return alert("Please provide either a file or a URL,  NOT BOTH.");
    if(!price || !category || !title || !description) return alert("enter all field before proceeding");
    if(isNaN(price)) return alert("Enter digit Only for price");   
    
    const formData = new FormData();
    formData.append("productId",productId)
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    if(image)
    {
    formData.append("image", image); // IMAGE IS THE NAME IN SINGLE.UPLOAD("image")
   
  }

   
    const payload = {
      productId,price,category,title,description
    }
    if (imgurl) {
      payload.image = imgurl;
    }

    try{
       const response = image ? await axiosInstance.put('/api/admin/products',formData) :  await axiosInstance.put('/api/admin/products',payload)  
      console.log(response)
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
            htmlFor="form1"
            type="file"
            autoComplete="off"
            name="image"
            className="mb-4"
            ref={fileInputRef} 
  
          />

<MDBInput
            label="Product URL"
            htmlFor="form1"
            type="url"
            autoComplete="off"
            name="imgurl"
            className="mb-4"
          />


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
          defaultValue={product.description}
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
}




