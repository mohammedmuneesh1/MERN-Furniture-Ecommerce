
import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "./Axios/axiosInstance";
import { useNavigate } from "react-router-dom";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
export default function AdminBody() {
  const navigate = useNavigate();
  const { user, item } = useContext(MyData);
  const [data, setData] = useState({
    users: 0,
    revenue: 0,
    productSold: 0,
    productDetails: [],
  });

  const dataUpdate = (obj) => {
    setData((prevData) => ({
      ...prevData,
      ...obj,
    }));
  };

  const totalUsers = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/users");
      dataUpdate({ users: response.data.data.length });
    } catch (error) {
      console.log(error.message);
    }
  };

  const revenueFn = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/stats");
      if (response.status === 200) {
        dataUpdate({
          revenue: response.data.data[0].revenue,
          productSold: response.data.data[0].totalProductPurchased,
        });
      }
    } catch (error) {
      console.log("error on admin revenue side: " + error.message);
    }
  };
  const order = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/orders");
      if (response.status === 200) {
        dataUpdate({ orders: response.data.order.length });
      }
    } catch (error) {}
  };

  const newUsers = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/users");
      if (response.status === 200) {
        dataUpdate({ userDetails: response.data.data });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const productDetails = async () => {
    try {
      const response = await axiosInstance.get("/api/admin/products");
      if (response.status === 200)
        return dataUpdate({ productDetails: response.data.data });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    totalUsers();
    revenueFn();
    order();
    newUsers();
    productDetails();
  },[]);


  return (
    <div className="a-body">
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mb-5 mt-5">
        <div className="content-box">
          <h6>Total Users</h6>
          <h2>{data.users}</h2>
          <p className="text-success">
            <MDBIcon fab icon="product-hunt" />
            &nbsp;
            {Math.round(Math.random() * 100) / 10}%{" "}
            <span className="text-muted"> Last Month</span>
          </p>
        </div>

        <div className="content-box">
          <h6>Total Orders Received</h6>
          <h2>{data.orders}</h2>
          <p className="text-success">
            <MDBIcon fab icon="product-hunt" />
            &nbsp;
            {Math.round(Math.random() * 100) / 10}%{" "}
            <span className="text-muted"> Last Month</span>
          </p>
        </div>

        <div className="content-box">
          <h6>revenue</h6>
          <h2>{data.revenue}</h2>
          <p className="text-success">
            <MDBIcon fab icon="product-hunt" />
            &nbsp;
            {Math.round(Math.random() * 100) / 10}%{" "}
            <span className="text-muted"> Last Month</span>
          </p>
        </div>

        <div className="content-box">
          <h6>Total Product Sold</h6>
          <h2>{data.productSold}</h2>
          <p className="text-success">
            <MDBIcon fab icon="product-hunt" />
            &nbsp;
            {Math.round(Math.random() * 100) / 10}%{" "}
            <span className="text-muted"> Last Month</span>
          </p>
        </div>

      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div
          style={{
            width: "550px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(195, 195, 195, 1)",
          }}
        >
          <h4 className="text-center mt-2">Latest Products</h4>

          <div style={{ overflowY: "auto", height: "290px" }}>
            <MDBTable striped>
              <MDBTableHead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">Product Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">IMAGE</th>
                  <th scope="col">PRICE</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {data.productDetails &&
                  data.productDetails
                    .slice(-8)
                    .reverse()
                    .map((value, index) => (
                      <tr style={{ textAlign: "center" }} key={value._id}>
                        <td scope="row" style={{ textAlign: "justify" }}>
                          {value.title}
                        </td>
                        <td>{value.category}</td>
                        <td>
                          <img
                            src={value.image}
                            style={{ width: "45px", height: "45px" }}
                            className="rounded-circle"
                            alt="roundimage"
                          />
                        </td>
                        <td>{value.price}</td>
                      </tr>
                    ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>

        <div
          style={{
            width: "550px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(195, 195, 195, 1)",
          }}
        >
          <h4 className="text-center mt-2">New Registration</h4>

          <div style={{ overflowY: "auto", height: "290px" }}>
            <MDBTable striped>
              <MDBTableHead>
                <tr style={{ textAlign: "center" }}>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">ORDER DETAILS</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {data.userDetails &&
                  data.userDetails
                    .slice(-6)
                    .reverse()
                    .map((value, index) => (
                      <tr style={{ textAlign: "center" }} key={value._id}>
                        <td>{value._id}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>
                          <button
                            onClick={() =>
                              navigate(`/Admin/OrderDetails/${value._id}`)
                            }
                            style={{
                              borderRadius: "5px",
                              background: "#4E4FEB",
                              color: "white",
                              padding: "5px 15px",
                              outline: "none",
                              border: "none",
                              letterSpacing: "1px",
                              fontFamily: "monospace",
                            }}
                          >
                            INFO
                          </button>
                        </td>
                      </tr>
                    ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </div>

      <h3 className="text-center fontfamily-monospace mt-5 mb-5">
        Social Media
      </h3>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5  mt-4 mb-5">
        <div
          style={{
            width: "240px",
            borderRadius: "15px",
            boxShadow: "0 2px 4px rgba(195, 195, 195, 1)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
            src="https://wallpaperaccess.com/full/2547011.jpg"
            alt="facebookImage"
          />

          <div className="d-flex justify-content-between align-items-center gap-5 ">
            <div className="text-center me-4 mt-3">
              <h6>584K</h6>
              <p>Followers</p>
            </div>
            <div className="text-center mt-3">
              <h6>978</h6>
              <p>Tweets</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "240px",
            borderRadius: "15px",
            boxShadow: "0 2px 4px rgba(195, 195, 195, 1)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
            src="https://wallpaperaccess.com/full/4719129.png"
            alt="twitterImage"
          />
          <div className="d-flex justify-content-between align-items-center gap-5 ">
            <div className="text-center me-4 mt-3">
              <h6>35K</h6>
              <p>Followers</p>
            </div>
            <div className="text-center mt-3">
              <h6>35K</h6>
              <p>Post</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "240px",
            borderRadius: "15px",
            boxShadow: "0 2px 4px rgba(195, 195, 195, 1)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
            src="https://wallpaperaccess.com/full/274084.png"
            alt="InstagramImage"
          />
          <div className="d-flex justify-content-between align-items-center gap-5 gap-5">
            <div className="text-center me-4 mt-3">
              <h6>35K</h6>
              <p>Followers</p>
            </div>
            <div className="text-center mt-3">
              <h6>35K</h6>
              <p>Post</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "240px",
            borderRadius: "15px",
            boxShadow: "0 2px 4px rgba(195, 195, 195, 1)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
            src="https://wallpaperaccess.com/full/2484197.png"
            alt="LinkedinImage"
          />
          <div className="d-flex justify-content-between align-items-center gap-5 gap-5">
            <div className="text-center me-4 mt-3">
              <h6>758</h6>
              <p>Contacts</p>
            </div>
            <div className="text-center mt-3">
              <h6>365</h6>
              <p>Feeds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
