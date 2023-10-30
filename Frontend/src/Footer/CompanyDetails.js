import React, { useEffect, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import gp from '../Assets/footer-Assests/google-play.png';
import ps from '../Assets/footer-Assests/playstore.webp';

const CompanyDetails = () => {
  const [showMore, setShowMore] = useState(true);

  const change = () => {
    setShowMore(!showMore);
  };

  const handleSize = () => {
    if (window.innerWidth <= 800) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div className="CD-main">
      {showMore && (
        <div className="CD-details">
          <hr/>
          <div className="email-sub">
            <span>Sign up for our offer</span>
            <input type="email" id="email" className="input-field" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
          <p className="CD-para">When you're looking for fantastic furnishings, look no further than Pepperfry. We offer a great range of designer furnishings for you to choose from. Take your pick from funky cushion covers, blinds and shades, rugs, carpets, diwan sets and durries and runners when you're looking for great living room furnishings. Select from interesting table linen, cushion insters, floor mats, pillows, door curtains and curtain brackets and rods to add some luxury home furnishings. We also offer pillows and kids furnishings as well.Shop from Wide Range of Home Furnishings Products Online at Pepperfry.comAt Pepperfry, we offer over 10,000 products for you to choose from. With our convenient payment options (COD, Mastercard, Visa and Paypal), easy returns, free assembly and delivery, it's no secret why we are the leading brand in India in the furnishings segment. You can also avail discounts & offers on wide range of furniture, home decor, home & office furniture, decor items, furnishing products, bed & bath products online, kitchen products and accessories and electrical appliances online, housekeeping products, dining products for home, home bar accessories, hardware and electricals, Garden and Outdoor Products and kids products, that suit your need.</p>
      <hr/>
       <div className="CD-brand">
         < div className="CD-d">
                <h2>Popular Categories</h2>
                <p style={{textAlign:"justify"}}>
                <span>Sectional Sofas, </span>
                <span>Sofa Sets,</span>
<span>Queen Size Beds, </span>
<span>King Size Beds, </span>
<span>Coffee Tables, </span>
<span>Dining Sets, </span>
<span>Recliners,</span>
<span>Sofa Cum Beds, </span>
<span>Rocking Chairs, </span>
<span>Cabinets & Sideboards,</span>
<span>Book Shelves, </span>
<span>TV & Media Units, </span>
<span>Wardrobes,</span>
<span>Outdoor Furniture, </span>
<span>Bar Cabinets, </span>
<span>Wall Shelves, </span>
<span>Photo Frames,</span>
<span>Bed Sheets, </span>
<span>Table Linen, </span>
<span>Study Tables, </span>
<span>Office Furniture, </span>
<span>Dining Tables, </span>
<span>Carpets, </span>
<span>Wall Art </span>

                </p>
              </div>
              < div className="CD-d">
                <h2>Popular Brands</h2>
                <p style={{textAlign:"justify"}}>

                <span>Mintwud, </span>
<span>Woodsworth, </span>
<span>CasaCraft, </span>
<span>Amberville, </span>
<span>Mudramark, </span>
<span>Bohemiana, </span>
<span>Clouddio, </span>
<span>Spacewood, </span>
<span>A Globia Creations, </span>
<span>Febonic, </span>
<span>@home, </span>
<span>Durian, </span>
<span>Evok, </span>
<span>Hometown, </span>
<span>Nilkamal, </span>
<span>Crystal Furnitech, </span>
<span>Bluewud, </span>
<span>Duroflex, </span>
<span>Sleepyhead, </span>
<span>Green Soul, </span>
<span>Orange Tree</span>

                </p>
              </div>
              < div className="CD-d">
                <h2>Popular cities</h2>
                <p style={{textAlign:"justify"}}>
     <span>Bengaluru, </span>
<span>Mumbai, </span>
<span>Navi Mumbai, </span>
<span>Delhi, </span>
<span>Hyderabad, </span>
<span>Pune, </span>
<span>Chennai, </span>
<span>Gurgaon, </span>
<span>Kolkata, </span>
<span>Noida, </span>
<span>Goa, </span>
<span>Ghaziabad, </span>
<span>Faridabad, </span>
<span>Jaipur, </span>
<span>Lucknow, </span>
<span>Kochi, </span>
<span>Visakhapatnam, </span>
<span>Chandigarh, </span>
<span>Vadodara, </span>
<span>Nagpur, </span>
<span>Thiruvananthapuram, </span>
<span>Indore, </span>
<span>Mysore, </span>
<span>Bhopal, </span>
<span>Surat, </span>
<span>Jalandhar, </span>
<span>Patna, </span>
<span>Ludhiana, </span>
<span>Ahmedabad, </span>
<span>Nashik, </span>
<span>Madurai, </span>
<span>Kanpur, </span>
<span>Aurangabad </span>
                </p>
              </div>
              < div className="CD-d CD-dimg">
                <h2>Links</h2>
                <img src={ps} alt="playstore"/>
                <br/>
                <img src={gp} alt="google pay" />
              </div>
              </div>
              <hr/>
        </div>
      )}
      <div className="CD-btn">
        <MDBBtn onClick={change} color="primary">
          {showMore ? "Show Less ▲" : "Show More ▼"}
        </MDBBtn>
      </div>
    </div>
  )
};

export default CompanyDetails;
