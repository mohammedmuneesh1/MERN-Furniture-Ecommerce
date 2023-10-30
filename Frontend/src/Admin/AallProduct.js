import React, { useContext } from "react";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import { useNavigate } from "react-router-dom";

export default function AallProduct() {
  const { item,removeItem} = useContext(MyData);
  const navigate=useNavigate();
  
 

  return (
    <div className="a-body">
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">IMAGE</th>
            <th scope="col">NAME</th>
            <th scope="col">PRICE</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {item.map((value, index) => (
            <tr key={index}>
              <th scope="row">{value.id}</th>
              <td>
                <img
                  src={value.src}
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                  alt="productroundcircleImage"
                />
              </td>
              <td>{value.name.slice(0, 30)}</td>
              <td>{value.price}</td>
              <td className="pe-0">
                <MDBBtn onClick={()=>navigate(`/Admin/ProductEdit/${value.id}`)}>EDIT</MDBBtn>
              </td>
              <td className="ps-0">
                <MDBBtn  color="danger" onClick={()=>removeItem(index)}>
                  DELETE
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
