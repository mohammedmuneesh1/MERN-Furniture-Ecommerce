import React, { useContext, useEffect, useState } from 'react'
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useParams } from 'react-router-dom';
import { MyData } from '../Main-Component/MyData';
import axiosInstance from './Axios/axiosInstance';
export default function ProductEditPage() {
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














  const updateProduct = async (e,id)=>{
    e.preventDefault();
    console.log(id)
    const ProductId = id;
    const title = e.target.Pname.value;
    const price =e.target.Pprice.value;
    const category = e.target.Pcategory.value;

    // productId, title, description, ,
    try{
      const response = await axiosInstance.put('/api/admin/products')
       console.log("hello")
    }
    catch(error){
console.log(error.message)
    }
  }

  // const UpdateProduct=(e)=>{
  //   e.preventDefault();

  //   const UpdatedItem=[...item];

  //    UpdatedItem[arrindex]={
  //     ...UpdatedItem[arrindex],
  //     category:e.target.Pcategory.value,
  //     name:e.target.Pname.value,
  //     src:e.target.imgurl.value,
  //     price:e.target.Pprice.value
  //   }
  //   setItem(UpdatedItem);


  // }

useEffect(()=>{
  productChk();
},[]);


return(
  <div className='a-body'>
  <div className="pap mt-5">
    {!product ? ( 
      <p>Loading...</p>
    ) : (
      <form>
        <h3 className="text-center pt-5 mb-3">ADD NEW PRODUCT</h3>

        {/* <MDBInput
          
          htmlFor="form1"
          type="file"
          autoComplete="off"
          name="imgurl"
          className="mb-4"
          
        /> */}

         <MDBInput
          label="Product Name"
          htmlFor="form1"
          type="text"
          autoComplete="off"
          name="Pname"
          className="mb-4"
          defaultValue={product.title}
          required
        />

         <MDBInput
          label="Product Price"
          htmlFor="form1"
          type="text"
          autoComplete="off"
          name="Pprice"
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
          name="Pcategory"
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
          <MDBBtn type="submit" className="mb-5" color="warning" onClick={(e)=>updateProduct(e,product._id)}>
            UPDATE        
          </MDBBtn>
        </div>


        

      </form>
    )}
  </div>
</div>
)


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
