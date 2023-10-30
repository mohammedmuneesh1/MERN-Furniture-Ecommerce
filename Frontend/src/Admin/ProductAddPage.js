import React, { useContext } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import { useNavigate } from "react-router-dom";

export default function ProductAddPage() {
  const { item, setItem } = useContext(MyData);
  const navigate = useNavigate();
  const Lid = item.reduce((LatestId, value) => Math.max(LatestId, value.id), 0);
  const addproduct = (e) => {
    e.preventDefault(e);
    const imgurl = e.target.imgurl.value.trim();
    const Pname = e.target.Pname.value.trim();
    const Pprice = parseInt(e.target.Pprice.value.trim());
    const Pcategory = e.target.Pcategory.value.trim();
    if (Pcategory === "ptype") {
      alert("Please select a valid category.");
    } 
    else if (imgurl === "" || Pname === "" || Pprice === "" || Pcategory === "") {
      alert("Enter valid input[Dont use whitespace only]");
    } 
    else {
      if (isNaN(Pprice)) {
        alert("enter a number");
      }
      else if(Pcategory === "ptype")
      {
        alert("please select a category");
      }
      else {
        const isProductExists = item.some((product) => product.name === Pname);
        //simple method to check if item exist some() took duplicate and check its existence;
        if (isProductExists) {
          alert("already added");
          navigate("/Admin/Products");
          return;
        }
        setItem([
          ...item,
          {
            id: Lid + 1,
            category: Pcategory.charAt(0).toUpperCase() + Pcategory.slice(1),
            name: Pname,
            src: imgurl,
            price: Pprice,
            quantity: 1,
          },
        ]);
        alert("product added successfully");
      }
    }
  };

  return (
    <div className="a-body">
      <div className="pap mt-5">
        <form onSubmit={addproduct}>
          <h3 className="text-center pt-5 mb-3">ADD NEW PRODUCT</h3>
          <MDBInput
            label="Image URL"
            htmlFor="form1"
            type="text"
            autoComplete="off"
            name="imgurl"
            className="mb-4"
            required
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
          </select>
          <div className="d-flex justify-content-center ">
            <MDBBtn type="submit" className="mb-5" color="warning">
              Warning
            </MDBBtn>
          </div>
        </form>
      </div>
    </div>
  );
}
