import FS from "../Assets/body-Assets/freedom-sales.jpg";
import SS from "../Assets/body-Assets/star-sale.png";

/*images of imgp1-c1 start here*/
import balcony from '../Assets/body-Assets/balcony.jpg'
import raincomfort from '../Assets/body-Assets/raincomfort.avif'

import signup from '../Assets/body-Assets/signup.avif'
/*images of imgp1-c1 end here*/


/*images of img-p2 start here */
import p2A from "../Assets/body-Assets/p1.png";
import p2B from "../Assets/body-Assets/p2.png";
import p2C from "../Assets/body-Assets/p3.png";
import p2D from "../Assets/body-Assets/p4.jpg";
import p2E from "../Assets/body-Assets/p5.png";
import p2F from "../Assets/body-Assets/p6.jpg";
/*images of img-p2  end here*/

/*images of img-p3 start here*/
import p3A from "../Assets/body-Assets/ICIC.jpg";
import p3B from "../Assets/body-Assets/top-categories.png";
/*images of img-p3 end here*/

/* images of img-p4 start here */
import p4A from "../Assets/body-Assets/p4A.png";
import p4B from "../Assets/body-Assets/p4B.png";
import p4C from "../Assets/body-Assets/p4C.png";
import p4D from "../Assets/body-Assets/p4D.png";
import p4E from "../Assets/body-Assets/p4E.png";
import p4F from "../Assets/body-Assets/p4F.png";
import p4G from "../Assets/body-Assets/p4G.png";
import p4H from "../Assets/body-Assets/p4H.png";
import p4I from "../Assets/body-Assets/p4I.png";
import { useNavigate } from "react-router-dom";

/* images of img-p4 start here */
const IntroImg = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className="img-p1">
        <img src={FS} alt="Freedom Sale" />
        <br />
        </div>



      <div className="imgp1c1">
        <div className="imgp1-c1">
        
          <img src={balcony} alt="carven lounge chair" />
        
        
          <img src={balcony} alt="Diner 6 seater dining set" />
        
        
          <img src={raincomfort} alt="jasper storage bed" />
        
        </div>
        <div className="imgp1c1-signup">
        <img src={signup} alt="signup " />
        </div>
        
        </div>









        <div className="img-p1">
        <img src={SS} alt="star sale" />
        </div>








      <div className="img-p2">
        
          <img src={p2A} alt="carven lounge chair" />
        
        
          <img src={p2B} alt="Diner 6 seater dining set" />
        

        
          <img src={p2C} alt="jasper storage bed" />
        
        <br />

        
          <img src={p2D} alt="declove coffee table" />
        

        
          <img src={p2E} alt="hilton 2 door" />
        

        
          <img src={p2F} alt="Darwin fabric sofa" />
        
      </div>
      <div className="img-p3">
        
          <img src={p3A} alt="ICIC bank offer" />
        
        <br />
        
          <img src={p3B} alt="Darwin fabric sofa" />
        
        <br />
      </div>
      
      <div className="img-p4">
       
          <img src={p4A} alt="carven lounge chair" />
        


        <span>
          <img src={p4B}  onClick={()=>navigate("/sofa")} alt="Diner 6 seater dining set"  />
        </span>



        
          <img src={p4C} alt="jasper storage bed " />
        
        <br />

        
          <img src={p4D} alt="declove coffee table " />
        

        
          <img src={p4E} alt="hilton 2 door " />
        

        
          <img src={p4F} alt="Darwin fabric sofa" />
        
        <br />

        
          <img src={p4G} alt="declove coffee table" />
        

        
          <img src={p4H} alt="hilton 2 door  " />
        

        
          <img src={p4I} alt="Darwin fabric sofa " />
        
      </div>
    </>
  );
};
export default IntroImg;
