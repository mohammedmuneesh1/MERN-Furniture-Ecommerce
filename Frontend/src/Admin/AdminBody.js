import React, { useContext } from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
export default function AdminBody() {
  const { user,item } = useContext(MyData);
  return (
    <div className="a-body" >
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 mb-5 mt-5">
        <div className="content-box">
          <h6>Total Users</h6>
          <h2>{user.length - 1}</h2> {/*-1 [ADMIN] */}
          <p className="text-success">
            <MDBIcon fas icon="user-alt" className="me-2" />
            {Math.round(Math.random() * 100) / 10}%
            <span className="text-muted"> Last Month</span>
          </p>
                
        </div>
        <div className="content-box">
          <h6>Total Orders</h6>
          <h2>{Math.round(Math.random()* 10000)}</h2>
          <p className="text-success">
            <MDBIcon  className="me-2" />
            <span class="material-symbols-outlined">order_approve</span>
            {Math.round(Math.random() * 100) / 10}%{" "}
            <span className="text-muted"> Last Month</span>
          </p>
                
        </div>
        <div className="content-box">
          <h6>No. Of Visits</h6>
          <h2>{Math.round(Math.random()* 10000)}</h2>
         
          <p className="text-success">
            <MDBIcon fas icon="users" className="me-2" />
            {Math.round(Math.random() * 100) / 10}%{" "}
            <span className="text-muted"> Last Month</span>
          </p>
                
        </div>

      </div>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
<div style={{ width: "550px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(195, 195, 195, 1)"}}>
  <h4 className="text-center mt-2">Latest Products</h4>

<div style={{overflowY:"auto",height:"290px"}}>
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">IMAGE</th>
          <th scope="col">PRICE</th>
          <th scope="col">EDIT</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {item.slice(-8).reverse().map((value, index) => (
          <tr key={value.id}>
            <th scope="row">{value.id}</th>
            <td>
              <img
                src={value.src}
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
                alt="roundimage"
              />
            </td>
            <td>{value.price}</td>
            <td>
          <button style={{borderRadius:"5px",background:"#4E4FEB",color:"white",padding:"5px 15px",outline:"none",border:'none',letterSpacing:"1px",fontFamily:"monospace"}}>EDIT</button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
</div>


<div style={{ width: "550px", borderRadius: "10px", boxShadow: "0 2px 4px rgba(195, 195, 195, 1)"}}>
  <h4 className="text-center mt-2">New Registration</h4>

<div style={{overflowY:"auto",height:"290px"}}>
    <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">PASSWORD</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {user.slice(-6).reverse().map((value, index) => (
          <tr key={value.id}>
            <th scope="row">{value.id}</th>
            <td>
              {value.name}
            </td>
            <td>{value.email}</td>
            <td>
            <button style={{borderRadius:"5px",background:"#4E4FEB",color:"white",padding:"5px 15px",outline:"none",border:'none',letterSpacing:"1px",fontFamily:"monospace"}}>EDIT</button>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
    </div>
</div>



</div>



      < h3 className="text-center fontfamily-monospace mt-5 mb-5">Social Media</h3>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-5  mt-4 mb-5" >
      <div style={{ width: "240px", borderRadius: "15px", boxShadow: "0 2px 4px rgba(195, 195, 195, 1)", display: "flex", alignItems: "center", flexDirection: "column" }}>
  <img style={{ width: "100%", height: "auto",borderTopLeftRadius:"15px",borderTopRightRadius:"15px" }} src="https://wallpaperaccess.com/full/2547011.jpg" alt="facebookImage" />
 
 
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
        <div style={{ width: "240px",  borderRadius: "15px", boxShadow: "0 2px 4px rgba(195, 195, 195, 1)", display: "flex", alignItems: "center", flexDirection: "column" }}>
  <img style={{ width: "100%", height: "auto",borderTopLeftRadius:"15px",borderTopRightRadius:"15px" }} src="https://wallpaperaccess.com/full/4719129.png" alt="twitterImage" />
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
        <div style={{ width: "240px",  borderRadius: "15px", boxShadow: "0 2px 4px rgba(195, 195, 195, 1)", display: "flex", alignItems: "center", flexDirection: "column" }}>
  <img style={{ width: "100%", height: "auto",borderTopLeftRadius:"15px",borderTopRightRadius:"15px" }} src="https://wallpaperaccess.com/full/274084.png" alt="InstagramImage" />
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
        <div style={{ width: "240px", borderRadius: "15px", boxShadow: "0 2px 4px rgba(195, 195, 195, 1)", display: "flex", alignItems: "center", flexDirection: "column" }}>
  <img style={{ width: "100%", height: "auto",borderTopLeftRadius:"15px",borderTopRightRadius:"15px" }} src="https://wallpaperaccess.com/full/2484197.png" alt="LinkedinImage" />
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
