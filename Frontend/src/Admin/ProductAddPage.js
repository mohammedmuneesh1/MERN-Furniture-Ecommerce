import React, { useContext } from "react";
import axios from "axios";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axiosInstance from "./Axios/axiosInstance"
import {toast} from "react-hot-toast";
export default function ProductAddPage() {
  const { item, setItem } = useContext(MyData);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const Lid = item.reduce((LatestId, value) => Math.max(LatestId, value.id), 0);




  const addproduct = async (e) => {
    e.preventDefault();
  
    const image = fileInputRef.current.files[0];
  
    const imgurl = e.target.imgurl.value.trim();
    const form = document.getElementById("productForm");
    const title = e.target.Pname.value.trim();
    const price = parseInt(e.target.Pprice.value.trim().replace(/,/g, ''));
    const category = e.target.Pcategory.value.trim();
    const description = e.target.pDescription.value;
  
    if (image && imgurl || !image && !imgurl) {
      return alert("Please provide either a file or a URL, NOT BOTH.");
    }
    if (category === "ptype") {
      return alert("Please select a valid category.");
    }
  
    if (title === "" || price === "" || category === "" || description === "") {
      return alert("Please ensure all fields contain valid data.");
    }
    if (isNaN(price)) {
      return alert("Enter a valid product price in digits.");
    }
  
    const formData = new FormData();
  
    formData.append("image", image);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
  
    const payload = {
      title,
      description,
      price,
      image: imgurl,
      category,
    };
  
    try {
      await toast.promise(
        axiosInstance.post('/api/admin/products', image ? formData : payload),
        {
          loading: 'Adding product...',
          success: () => {
            form.reset();
            e.target.Pcategory.value = 'ptype';
            return 'Product added successfully';
          },
          error: (error) => `Product Error: ${error.response.data.message}`,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  



  return (
    <div className="a-body">
      <div className="pap mt-5">
        <form onSubmit={addproduct}  id= "productForm" encType="multipart/form-data">
          <h3 className="text-center pt-5 mb-3">ADD NEW PRODUCT</h3>

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
            name="Pname"
            className="mb-4"
            required
          />

            <MDBInput
            label="Product Description"
            htmlFor="form1"
            type="text"
            autoComplete="off"
            name="pDescription"
            className="mb-4"
            required
          />

          <MDBInput
            label="Product Price"
            htmlFor="form1"
            type="text"
            autoComplete="off"
            name="Pprice"
            className="mb-4"
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
            required
          >
            <option value="ptype" disabled selected>P-Type</option>
            <option value="Sofa">Sofa</option>
            <option value="Bowl">Bowls</option>
            <option value="Lamps">Lamps</option>
            <option value="Plants">Plants</option>
            <option value="Mattress">Mattress</option>
            <option value="Appliances">Appliances</option>
            <option value="Chair">Chair</option>
          </select>
          <div className="d-flex justify-content-center ">
            <MDBBtn type="submit" className="mb-5" color="warning">
              Add
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  );
}
