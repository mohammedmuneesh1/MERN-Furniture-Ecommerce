import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";

export default function OrderDetails() {
  const { id } = useParams();
  const { user } = useContext(MyData);
  const navigate = useNavigate();
  const idchk=Number(id);


//   const customer = user.filter(value => value.id === idchk);
const customer=user.filter(value=>value.id===idchk);
  return (

    <div className="a-body">
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">ORDER ID</th>
            <th scope="col">PRODUCT NAME</th>
            <th scope="col">UNIT PRICE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">TOTAL PRICE</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {customer.map((value, id) =>
            value.order.length > 0 ? (
                value.order.map((ovalue,oindex)=>(
              <tr key={oindex}>
                <th scope="row">{ovalue.Oid}</th>
                <td>{ovalue.Opname}</td>
                <td>{ovalue.Opprice}</td>
                <td>{ovalue.Oqty}</td>
                    {oindex === 0 ? (
                      <th rowSpan={value.order.length}>
                        {value.order.reduce(
                          (total, orderItem) =>
                            total + orderItem.Opprice * orderItem.Oqty,
                          0
                        )}
                      </th>
                    ) : null}
             
              </tr>
                ))
            ) :(
                <>
                <tr>
               <th colSpan="5" className="text-center">No Product Ordered Yet...</th>
               </tr>
                </>
            )
          )}
        </MDBTableBody>
      </MDBTable>
      <div className="d-flex justify-content-center mt-5"> <MDBBtn className='me-1' color='warning' onClick={()=>navigate("/Admin/Auser")}>
        users
      </MDBBtn></div>
    </div>
  );
}
