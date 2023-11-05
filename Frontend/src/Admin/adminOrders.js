import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn } from "mdb-react-ui-kit";
import axiosInstance from "./Axios/axiosInstance";

export default function AdminOrders(){
    const [order,setOrder] = useState([]);

    const orderDetails = async  ()=>{
        try{
            const response = await axiosInstance.get('/api/admin/orders')

            if(response.status === 200){
                setOrder(response.data.order)
            }
        }
        catch(error){
            console.log(error.message)

        }
    }

    useEffect(()=>{
      orderDetails()
    },[])
    return(
      <div className="a-body">
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">ORDER ID</th>
            <th scope="col">DATE TIME</th>
            <th scope="col">PRODUCT NAME</th>
            <th scope="col">UNIT PRICE</th>
            <th scope="col">QUANTITY</th>
            <th scope="col">TOTAL AMOUNT</th>
            <th scope="col">ORDER STATUS</th>
            
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
                    {
                      pindex === 0 ? (
                        <th rowSpan={value.products.length}>
                         <MDBBtn className='me-1' color='danger'>
        CONFIRM ORDER
      </MDBBtn>
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
   
    </div>
  );

      
    
    //     <div className="a-body">
    //         <MDBTable striped>
    //       <MDBTableHead>
    //         <tr>
    //           <th scope="col">ID</th>
    //           <th scope="col">NAME</th>
    //           <th scope="col">EMAIL</th>
    //           <th scope="col">ORDER DETAILS</th>
    //         </tr>
    //       </MDBTableHead>
    //       <MDBTableBody>
    //         {user.map((value, index) =>(
    //           <tr key={value._id}>
    //             <th>{value._id}</th>
    //             <td>{value.name}</td>
    //             <td>{value.email}</td>
    //             <td> <MDBBtn color='info'>Info</MDBBtn></td>
    //           </tr>
    //         ))}
    //       </MDBTableBody>
    //     </MDBTable>

    //     </div>
    // )
}
//onClick={()=>navigate(`/Admin/OrderDetails/${value._id}`)