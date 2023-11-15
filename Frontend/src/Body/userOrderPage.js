import React, { useEffect, useState } from "react";
import "./Body.css";
import axiosInstance from "../Admin/Axios/axiosInstance";

export default function OrderPage() {
  const [order, setOrder] = useState([]);
  const id = localStorage.getItem("id");

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/api/users/${id}/orders`);
      if (response.status === 200) {
        setOrder(response.data.orderProductDetails);
      }
    } catch (error) {
      console.log("userOrderPage Error Occurred" + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(order);
  return (
    <div className="orders">
      {order ? (
        order.map((value) => (
          <>
            {value.products.map((pvalue) => (
              <div className="order-container" key={value.orderId}>
                <div className="order-details">
                  <img src={pvalue.image} alt="order-image" />
                  <div className="order-details-title">
                  <p>{pvalue.title}</p>
                  </div>
                  <div className="order-info">
                    <span>{value.time}</span>
                    <br />
                    <span>{value.date}</span>
                  </div>
                  <h6>Shipment Status</h6>
                </div>
              </div>
            ))}
          </>
        ))
      ) : (
        <p style={{ color: "white" }}>No orders yet</p>
      )}
    </div>
  );
}
