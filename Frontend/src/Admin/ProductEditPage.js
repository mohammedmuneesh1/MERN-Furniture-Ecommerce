import React, { useContext } from 'react'
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useParams } from 'react-router-dom';
import { MyData } from '../Main-Component/MyData';
export default function ProductEditPage() {
  const {id}=useParams();
  const {item,setItem}=useContext(MyData);
  const arrindex=id-1;
  const UpdateProduct=(e)=>{
    e.preventDefault();

    const UpdatedItem=[...item];

     UpdatedItem[arrindex]={
      ...UpdatedItem[arrindex],
      category:e.target.Pcategory.value,
      name:e.target.Pname.value,
      src:e.target.imgurl.value,
      price:e.target.Pprice.value
    }
    setItem(UpdatedItem);


  }
  return (
    <div className="a-body">
    <div className="pap mt-5">
      <form onSubmit={UpdateProduct}>
        <h3 className="text-center pt-5 mb-3">ADD NEW PRODUCT</h3>
        <MDBInput
          label="Image URL"
          htmlFor="form1"
          type="text"
          autoComplete="off"
          name="imgurl"
          className="mb-4"
          defaultValue={item[arrindex].src}   //USE DEFAULT VALUE IF YOU USE JUST VALUE INSTEAD OF DEFAULT VALUE , YOU CANT MODIFY  THE INPUT BOX
          required
        />
        <MDBInput
          label="Product Name"
          htmlFor="form1"
          type="text"
          autoComplete="off"
          name="Pname"
          className="mb-4"
          defaultValue={item[arrindex].name}
          required
        />
        <MDBInput
          label="Product Price"
          htmlFor="form1"
          type="text"
          autoComplete="off"
          name="Pprice"
          className="mb-4"
          defaultValue={item[arrindex].price}
          required

        />
        {/* <MDBInput label='Product Category' htmlFor='form1' type='text'  autoComplete="off"  name="Pcategory" className="mb-4"/> */}
        <select
          style={{
            width: "100%",
            height:"40px",
            outline: "none",
           background:"none"
          }}
          name="Pcategory"
          defaultValue={item[arrindex].category}
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
          <MDBBtn type="submit" className="mb-5" color="warning">
            Warning
          </MDBBtn>
        </div>
      </form>
    </div>
  </div>
  )
}
