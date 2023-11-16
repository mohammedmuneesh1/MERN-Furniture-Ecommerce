import "../Login-Register/Login-Register.css";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBBadge } from "mdb-react-ui-kit";
import toast from "react-hot-toast"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { MyData } from "../Main-Component/MyData";
import axios from "axios";

const SecondHeader = () => {
  
  const navigate = useNavigate();
  const {
    lstatus,
    setLstatus,
    setLogname,
    close,
    setClose,
    item,
    cart,
    displayname,
    setDisplayname,
  } = useContext(MyData);
  //LSTATUS TRUE BY DEFAULT;
  //CLOSE USESTATE FALSE BY DEFAULT;
  const [state, setState] = useState(false);
  const handleMenuClick = () => {
    setState(!state);
  };
  const Lformcheck = async (e) => {
    e.preventDefault();
    const form = document.getElementById("login-form1");
    const email = e.target.lemail.value.trim();
    const password = e.target.lpass.value.trim();
    const emailEnv = process.env.REACT_APP_ADMIN_EMAIL
    if (email === "" || password === "") {
      return alert("Please enter your email and password.");
    }
    const payload = { email, password };
    const payUrl =( email === emailEnv ?  "http://localhost:8000/api/admin/login" : "http://localhost:8000/api/users/login" )
    try{
      const response = await axios.post(payUrl,payload);
      if(response.status === 200){
        const userName = email === emailEnv ? "admin" :response.data.user.name;
        const jwt = response.data.jwt;
        localStorage.setItem('jwtToken',jwt);
         localStorage.setItem('status',false);
         localStorage.setItem('name',userName);
         email === emailEnv ? localStorage.setItem('id',"") : localStorage.setItem('id',response.data.user._id);
        //  console.log(userName)
        //  email === emailEnv ? localStorage.setItem('name',"admin"):
        navigate(email === emailEnv ? "/Admin" : "/");
        setClose(!close);
        form.reset();
        window.location.reload();
        toast.success('Successfully toasted!')
      }
      else {
        alert("Login failed. Please check your credentials.");
      }
    }
    catch(error){
      console.log("user error" + error)
    }
  };




  useEffect(()=>{
    const token = localStorage.getItem('jwtToken');
    if(token){
      const displayName = localStorage.getItem('name')
     const status = localStorage.getItem("status")
     setDisplayname(displayName)
      setLstatus(status)
    }
  },[])






  //search function and its code
  const [searchfilter, setSearchfilter] = useState([]);
  const [search, setSearch] = useState("");

  const searchfn = (e) => {
    const stext = e.target.value;
    setSearch(stext);
    if (stext === "") {
      setSearchfilter([]);
    } else {
      const filtered = item.filter((value) => {
        return value.name.toLowerCase().includes(stext.toLowerCase());
      });

      setSearchfilter(filtered.slice(0, 6));
    }
  };
  //search function end here
  const token = localStorage.getItem('jwtToken')
  return (
    <>
      <div className="secondheader-main">
        <div className="sechead-main">
          <div className="sec-search">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={searchfn}
            />{" "}
            <span className="material-symbols-outlined search">search </span>
            <ul className="search-container">
              {searchfilter.map((value) => (
                <>
                  <li
                    key={value.id}
                    onClick={() => {
                      navigate(`/Product/${value.id}`);
                      setSearchfilter([]);
                      setSearch("");
                    }}
                  >
                    {value.name}
                  </li>
                  <hr style={{ marginBottom: "0px" }} />
                </>
              ))}
            </ul>
          </div>

          <div className="brand">
            <h1
              style={{
                cursor: "pointer",
                fontFamily: "serif",
                letterSpacing: "3px",
              }}
              onClick={() => {
                navigate("/")
              window.location.reload()
              }}
            >
              Earthly
            </h1>
          </div>
          <div className="brand-right">
            <div className="brand-text">
              {token ?(
                <>
                  <span style={{ fontWeight: "bold", letterSpacing: ".1px" }}>
                    Hello
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#ff7035",
                      fontWeight: "bold",
                      letterSpacing: ".1px",
                    }}
                  >
                    😊{displayname}
                  </span>
                </>
              ):(
                <>
                  <span>Sign up Now</span>
                  <br />
                  <span style={{ color: "#ff7035" }}>Get 10,000 Credits</span>
                </>
              )}
            </div>

            <div className="icon">
              <span className="material-symbols-outlined profile">
                person
                <div className="profile-container">
                  <ul className="profile-list">
                    {!token && ( 
                      <>
                        {" "}
                        <li onClick={() => setClose(!close)}>
                          {" "}
                          Login/Register{" "}
                        </li>
                        <hr />
                      </>
                    )}

                    <li
                      onClick={() => {
                        lstatus
                          ? setClose(!close)
                          : alert("profile will be developed soon");
                      }}
                    >
                      My Profile{" "}
                    </li>
                    <hr />
                    <li onClick={()=>navigate('/orders')}>Orders</li>
                    <hr />

                    <li
                      onClick={() => {
                        lstatus
                          ? setClose(!close)
                          : alert("coin will be shown soon");
                      }}
                    >
                      My Coins{" "}
                    </li>
                    <hr />
                    <li
                      onClick={() => {
                        // lstatus?setClose(!close):setLstatus(!lstatus); if code didnt work remove all onclick code and place this one only here inside onclick
                        if (!token) {
                          setClose(!close);
                        } else {
                          const confirmLogout = window.confirm(
                            "Are you sure you want to log out?"
                          );

                          if (confirmLogout) {
                            localStorage.removeItem("jwtToken");
                            localStorage.setItem("status",true);
                            localStorage.removeItem("name");
                            setLstatus(false);
                            navigate('/')
                            
                            
                          }
                        }
                      }}
                    >
                      Log Out
                    </li>
                  </ul>
                </div>
              </span>

              <span className="material-symbols-outlined">notifications</span>
              <span className="material-symbols-outlined" onClick={()=>{
                if(token){
                  navigate('/Wishlist')
                }
                else{
                  setClose(!close)
                }
                }}>favorite</span>
              <span
                className="material-symbols-outlined"
                onClick={() => {
                  token ? navigate("/cart"):setClose(!close) ; 
                }}
              >
                shopping_cart
                <MDBBadge
                  color="danger"
                  notification
                  pill
                  style={{ fontSize: "10px", padding: "4px 5px" }}
                >
                  {token ? "" : ""}
                </MDBBadge>
              </span>
              <label
                htmlFor="check"
                className="checkbtn"
                onClick={handleMenuClick}
              >
                <span className="material-symbols-outlined">menu</span>
              </label>
            </div>
          </div>
        </div>


        <div className="sell">
          <ul style={{ marginBottom: "0px" }}>
            <li>SELL ON PEPPERFRY</li>
            <li>BECOME A FRANCHISE</li>
            <li>BUY IN BULK</li>
            <li>FIND A STUDIO</li>
            <li>GIFT CARDS</li>
            <li>GET INSPIRED</li>
            <li>TRACK YOUR ORDER</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        <nav className={state ? "show" : ""}>
          <label className="navbar-close" onClick={handleMenuClick}>
            <span className="material-symbols-outlined">close</span>
          </label>
          <ul style={{ marginBottom: "0px" }}>
            <li onClick={() => navigate("/sofa")}>Sofas & seating</li>
            <li onClick={() => navigate("/Mattress")}>Mattresses</li>
            <li onClick={() => navigate("/Bowl")}>Bowls</li>
            <li onClick={() => navigate("/Plant")}>Plants</li>
            <li onClick={() => navigate("/Appliances")}>Appliances</li>
            <li onClick={() => navigate("/Lamps")}>Lamps & Lightning</li>
          </ul>
        </nav>
      </div>
      {/* This is login page responsive  */}

      <div className="login-form" style={{ display: close ? "block" : "none" }}>
        <MDBContainer className="container">
          <form onSubmit={Lformcheck} id="login-form1">
            <MDBRow style={{ background: "white", borderRadius: "5px" }}>
              <MDBCol
                col="6"
                className="right-login"
                style={{ position: "relative" }}
              >
                <div className="d-flex flex-column ms-0 left-login">
                  <div className="text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style={{ width: "105px" }}
                      alt="logo"
                    />

                    <h4
                      className="mt-2 mb-0 pb-0 team-text"
                      style={{ cursor: "default" }}
                    >
                      We are The Lotus Team
                    </h4>
                  </div>
                  <p className="loginacc-text" style={{ cursor: "default" }}>
                    Please login to your account
                  </p>
                  <MDBInput
                    wrapperClass="mb-3"
                    label="Email address"
                    htmlFor="form1"
                    name="lemail"
                    type="email"
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-3"
                    label="Password"
                    htmlFor="form2"
                    name="lpass"
                    type="password"
                    required
                  />
                  <div className="text-center pt-1 mb-5 pb-5">
                    <MDBBtn
                      type="submit"
                      className=" w-100 gradient-custom-2 sign-in"
                    >
                      Sign in
                    </MDBBtn>
                    <a
                      href="https://www.google.com/"
                      className="text-muted"
                      style={{ cursor: "pointer" }}
                    >
                      Forgot password?
                    </a>
                    <p className="mb-0" style={{ cursor: "default" }}>
                      Don't have an account?&nbsp;
                      <span
                        className="text-muted"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/Registration")}
                      >
                        Register Now
                      </span>
                    </p>
                  </div>
                </div>
              </MDBCol>
              <MDBCol className="mb-0" style={{ paddingRight: "0px" }}>
                <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 right-login ">
                  <div className="text-white">
                    <span
                      className="material-symbols-outlined close-icon"
                      style={{ fontSize: "1.5rem", cursor: "pointer" }}
                      onClick={() => setClose(!close)}
                      value={{ close, setClose }}
                    >
                      close
                    </span>
                    <h4
                      className=" mb-2 right-login-head "
                      style={{ textAlign: "center", cursor: "default" }}
                    >
                      We are more than just a company
                    </h4>
                    <p
                      className="small mb-0"
                      style={{ textAlign: "justify", cursor: "default" }}
                    >
                      Discover the perfect blend of comfort, style, and
                      craftsmanship with our exquisite furniture collection.
                      Elevate your living space with pieces that seamlessly
                      marry functionality and aesthetics. Each meticulously
                      crafted item is a testament to our commitment to quality,
                      ensuring that your home is adorned with not just
                      furniture, but works of art. Explore our diverse range
                      today and redefine the way you experience your living
                      spaces.
                    </p>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBContainer>
      </div>
    </>
  );
};
export default SecondHeader;
