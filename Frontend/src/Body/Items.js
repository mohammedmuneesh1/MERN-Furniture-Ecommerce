import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle, // Add import for MDBCardTitle
} from "mdb-react-ui-kit";

import { MyData } from "../Main-Component/MyData";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();
  const { item } = useContext(MyData);
  const disP = item.slice(0, 8); // to display the first 8 products only

  const handlePrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("en-IN"); // 'en-IN' for the Indian numbering system (e.g., 1,23,456.00)
    return "₹" + formattedPrice;
  };

  return (
    <>
      <section className="products d-flex flex-column align-items-center">
        <h1 className="mt-5 text-black fw-bolder">
          <strong>Bestsellers</strong>
        </h1>

        <MDBContainer fluid className="my-5">
          <MDBRow className="best-seller d-flex flex-wrap justify-content-center mx-5">
            {disP.map((value, index) => (
              <MDBCol
                xl="3"
                lg="4"
                md="4"
                sm="6"
                className="mb-3 best-seller-image"
                key={value.id}
                onClick={() => navigate(`/Product/${value.id}`)} // Fix the onClick here
              >
                <MDBCard className="text-black">
                  <MDBCardImage
                    src={value.src}
                    position="top"
                    alt="product-image"
                  />
                  <MDBCardBody>
                    <div className=" text-center">
                      <MDBCardTitle className="best-seller-name fw-bold">
                        {value.name}
                      </MDBCardTitle>
                    </div>
                    <h3 className=" text-muted card-category" style={{ textAlign: 'center' }}>
  {value.category}
</h3>
                    <p
                      className="text-center fw-bolder fs-5"
                      style={{ color: "#ed2335" }}
                    >
                      {handlePrice(value.price)} {/* Use the handlePrice function here */}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Items;
