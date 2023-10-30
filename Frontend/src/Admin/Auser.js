import React, { useContext } from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import { useNavigate } from "react-router-dom";

export default function Auser() {
  const { user } = useContext(MyData);
  const navigate=useNavigate();
  const customers = user.filter((value) => value.type === "user");

  return (
    <>
      <div className="a-body">
        <MDBTable striped>
          <MDBTableHead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ORDER DETAILS</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {customers.map((value, index) =>(
              <tr key={value.id}>
                <th>{value.id}</th>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td> <MDBBtn color='info' onClick={()=>navigate(`/Admin/OrderDetails/${value.id}`)}>
        Info
      </MDBBtn></td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    </>
  );
}
