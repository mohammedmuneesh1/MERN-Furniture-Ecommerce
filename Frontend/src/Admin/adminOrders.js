import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdb-react-ui-kit";
import axiosInstance from "./Axios/axiosInstance";

export default function AdminOrders() {
  useEffect(() => {
    orderDetails();
  }, []);
  const [order, setOrder] = useState([]);

  const orderDetails = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/orders");
      if (response.status === 200) {
        setOrder(response.data.order.filter((value) => value.shipment === "pending"));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const orderConfirm = async (id) => {
    const confirm = window.confirm("Are you sure you want to confirm this order?");
    if (confirm) {
      try {
        const response = await axiosInstance.get(`/api/admin/order/confirm/${id}`);

        if (response.status === 200) {
          orderDetails(); // Refresh the order list after confirming
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

 

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
            <th scope="col">TOTAL AMOUNT</th>
            <th scope="col">ORDER STATUS</th>
            <th scope="col">SHIPMENT</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {order.length > 0 ? (
            order.map((value, id) =>
              value.products.length > 0
                ? value.products.map((pvalue, pindex) => (
                    <tr key={pindex}>
                      {pindex === 0 ? (
                        <>
                          <th rowSpan={value.products.length}>{value._id}</th>
                          <th rowSpan={value.products.length}>
                            {value.date} <br /> {value.time}
                          </th>
                        </>
                      ) : null}
                      <td>{pvalue.title.slice(0, 30)}</td>
                      <td>{pvalue.price}</td>
                      <td>PENDING</td>
                      {pindex === 0 ? (
                        <th rowSpan={value.products.length}>{value.total_amount}</th>
                      ) : null}
                      {pindex === 0 ? (
                        <th rowSpan={value.products.length}>
                          {value.shipment === "pending" ? (
                            <b
                              style={{
                                textTransform: "uppercase",
                                color: "red",
                              }}
                            >
                              {value.shipment}
                            </b>
                          ) : (
                            <b
                              style={{
                                textTransform: "uppercase",
                                color: "green",
                              }}
                            >
                              {value.shipment}
                            </b>
                          )}
                        </th>
                      ) : null}
                      {pindex === 0 ? (
                        <th rowSpan={value.products.length}>
                          <MDBBtn
                            className="me-1"
                            color="danger"
                            onClick={() => orderConfirm(value._id)}
                          >
                            CONFIRM ORDER
                          </MDBBtn>
                        </th>
                      ) : null}
                    </tr>
                  ))
                : null
            )
          ) : (
            <tr>
              <th colSpan="5" className="text-center">
                No New Orders Yet...
              </th>
            </tr>
          )}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
