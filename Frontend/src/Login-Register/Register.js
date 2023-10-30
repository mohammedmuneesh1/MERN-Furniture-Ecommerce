import React, { useContext} from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import { MyData } from "../Main-Component/MyData";

export default function Register() {
  const {setClose,user,setUser}=useContext(MyData);
const navigate=useNavigate();
const Lid = user.reduce((LatestId, value) => Math.max(LatestId, value.id), 0);

const userreg= async (e)=>{
  e.preventDefault();
  const form = document.getElementById('register-form'); 
    const fname=e.target.Rfname.value.trim();
    const Rpasschk=e.target.Rpasschk.value.trim();
    const email=e.target.Rmail.value.trim();
    const pass=e.target.Rpass.value.trim();
    if( fname === ""|| email === "" || pass === "" || Rpasschk === "" ){
      alert("Enter some Data");
    }
    else{
      if(pass !== Rpasschk){
        alert("Enter Correct Password")
      }
      else{

        const newUser = {
          id: Lid + 1,
          name: fname,
          password: pass,
          email:email,
          type: "user",
          order:[]

        };
        const payload = {
          name:fname,
          email,
          password:pass
        }
        
        setUser([...user, newUser]);

        try{
       const response =   await axios.post('http://localhost:8000/api/users/register',payload)
         console.log(response)
         if(response.status === 201){
              alert("welcome back")
          navigate("/")
          setClose(true);
          form.reset()

         }
        }
        catch(error){
          console.log(error);
          alert("An error occured during registration. Please try again")
        }

       
      }
}
}
//registration work pending (then cart )

  return (
    <div>
      <Body/>
      <div className="login-form">
        <MDBContainer className="container">
          <form onSubmit={userreg} id="register-form">
            <MDBRow  style={{background:"white",borderRadius:"5px"}}>
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

                    <h4 className="mt-2 mb-0 pb-0 team-text">
                      We are The Lotus Team
                    </h4>
                  </div>
                  <p className="loginacc-text">Please login to your account</p>
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Full Name"
                    htmlFor="form1"
                    name="Rfname"
                    type="text"
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Email address"
                    htmlFor="form2"
                    type="email"
                    name="Rmail"
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-1"
                    label="Password"
                    htmlFor="form3"
                    type="password"
                    name="Rpass"
                    required
                  /> <MDBInput
                  wrapperClass="mb-1"
                  label="Confirm Password"
                  htmlFor="form4"
                  type="password"
                  name="Rpasschk"
                  required
                />
                  <div className="text-center pt-1 mb-5 pb-5">
                    <MDBBtn  className=" w-100 gradient-custom-2 sign-in">
                      Sign in
                    </MDBBtn>
                  </div>
                </div>
              </MDBCol>
              <MDBCol  className="mb-0" style={{paddingRight:"0px"}}>
                <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 right-login">
                  <div className="text-white">
                    <span   style={{cursor:"pointer"}} className="material-symbols-outlined close-icon" onClick={()=>{
                    return navigate("/")}}>
                    close
                    </span>
                
                    <h4
                      className="mb-5 right-login-head"
                      style={{ textAlign: "center",fontFamily:"serif" }}
                    >
                      We are more than just a company
                    </h4>
                    <p className="small mb-0" style={{ textAlign: "justify" }}>
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
      <Footer/>
    </div>
  );
}
