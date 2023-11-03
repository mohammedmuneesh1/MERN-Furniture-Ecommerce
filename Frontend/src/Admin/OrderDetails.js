import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import axiosInstance from "./Axios/axiosInstance";

export default function OrderDetails() {
  const { id } = useParams();
  const { user } = useContext(MyData);
  const navigate = useNavigate();
  const [order,setOrder] = useState([])



const fetchOrder = async()=>{
  try{
    const response = await axiosInstance.get(`/api/admin/order/${id}`)  
    if(response.status === 200){
      setOrder(response.data.data);
      console.log(order)
    }
  }
  catch(error){
    console.log(error.message)
  }
}

useEffect(() => {
  fetchOrder();
}, []);

return (
  <div className="a-body">
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope="col">ORDER ID</th>
          <th scope="col">DATE TIME</th>
          <th scope="col">PRODUCT NAME</th>
          <th scope="col">UNIT PRICE</th>
          <th scope="col">QUANTITY</th>
          <th scope="col">TOTAL PRICE</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {order.length > 0 ? (
          order.map((value, id) =>
            value.products.length > 0 ? (
              value.products.map((pvalue, pindex) => (
                <tr key={pindex}>
                  {pindex === 0 ? (
                    <>
                      <th rowSpan={value.products.length}>
                        {value._id}
                      </th>
                      <th rowSpan={value.products.length}>
                        {value.date} <br /> {value.time}
                      </th>
                    </>
                  ) : null}
                  <td>{pvalue.title.slice(0, 30)}</td>
                  <td>{pvalue.price}</td>
                  <td>PENDING</td>
                  {pindex === 0 ? (
                    <th rowSpan={value.products.length}>
                      {value.total_amount}
                    </th>
                  ) : null}
                </tr>
              ))
            ) : null
          )
        ) : (
          <tr>
            <th colSpan="5" className="text-center">
              No Product Ordered Yet...
            </th>
          </tr>
        )}
      </MDBTableBody>
    </MDBTable>
    <div className="d-flex justify-content-center mt-5">
      <MDBBtn className="me-1" color="warning" onClick={() => navigate("/Admin/Auser")}>
        users
      </MDBBtn>
    </div>
  </div>
);




  // return (

  //   <div className="a-body">
  
 
  //         {!order && order.map((value, id) =>
  //           value.products.length > 0 ? (
  //               value.order.map((value,index)=>(
  //             <tr key={index}>
  //               <th scope="row">{value._id}</th>
  //               <td>{value.date}</td>
  //               <td>{value.total_amount}</td>
  //               <td>{value.time}</td>
  //                   {index === 0 ? (
  //                     <th rowSpan={value.products.length}>
              
  //                     </th>
  //                   ) : null}
             
  //             </tr>
  //               ))
  //           ) :(
  //               <>
  //               <tr>
  //              <th colSpan="5" className="text-center">No Product Ordered Yet...</th>
  //              </tr>
  //               </>
  //           )
  //         )}
  //       </MDBTableBody>
  //     </MDBTable>
  //     <div className="d-flex justify-content-center mt-5"> <MDBBtn className='me-1' color='warning' onClick={()=>navigate("/Admin/Auser")}>
  //       users
  //     </MDBBtn></div>
  //   </div>
  // );
}
