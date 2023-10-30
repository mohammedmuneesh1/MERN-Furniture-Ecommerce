import React, { useContext } from 'react'
import {MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MyData } from '../../Main-Component/MyData';
export default function ABowls() {
  const { item ,removeItem} = useContext(MyData);

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
      {item.filter(value=>value.category === "Bowl")
          .map((value,index)=>{
            const IndexOfCategoryItem = item.indexOf(value);
            return(
              <tr key={IndexOfCategoryItem}>
              <th scope="row">{value.id}</th>
              <td>
             
                <img
                  src={value.src}
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                  alt="BowlImage"
                />
              </td>
              <td>{value.name.slice(0, 40)}</td>
              <td>{value.price}</td>
              <td className="pe-0">
                <MDBBtn>EDIT</MDBBtn>
              </td>
              <td className="ps-0">
              <MDBBtn  color="danger" onClick={()=>removeItem(IndexOfCategoryItem)}>
                  DELETE
                </MDBBtn>
                </td>
            </tr>

            )
          })}
      </MDBTableBody>
    </MDBTable>
  </div>
  )
}
