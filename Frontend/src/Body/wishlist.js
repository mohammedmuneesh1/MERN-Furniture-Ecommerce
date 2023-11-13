import React, { useContext, useEffect } from "react";
import { MyData } from "../Main-Component/MyData";
import {
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const { wishlist, removeToWishlist, addToWishlist, handlePrice } = useContext(MyData);
  const navigate = useNavigate();

  useEffect(() => {
    
    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <h2 className="text-center">Wish List</h2>
      <br />
      <MDBContainer fluid className="my-5">
        <MDBRow className="best-seller d-flex flex-wrap justify-content-center mx-5">
          {wishlist && wishlist.length > 0 ? (
            wishlist.map((value) => (
              <MDBCol
                xl="3"
                lg="4"
                md="4"
                sm="6"
                className="mb-3 best-seller-image"
                key={value._id}
              >
                <MDBCard className="text-black">
                  <MDBIcon
                    className="heart-icon"
                    fas
                    icon="heart"
                    style={{ color: "red" }}
                    onClick={() => removeToWishlist(value._id)}
                  />
                  <MDBCardImage
                    src={value.image}
                    position="top"
                    alt="product-image"
                    onClick={() => navigate(`/Product/${value._id}`)}
                  />
                  <MDBCardBody onClick={() => navigate(`/Product/${value._id}`)}>
                    <div className=" text-center">
                      <MDBCardTitle className="best-seller-name fw-bold">
                        {value.title}
                      </MDBCardTitle>
                    </div>
                    <h3 className=" text-muted card-category" style={{ textAlign: 'center' }}>
                      {value.category}
                    </h3>
                    <p
                      className="text-center fw-bolder fs-5"
                      style={{ color: "#ed2335" }}
                    >
                      {handlePrice(value.price)}
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          ) : (
            <p className="text-center">Add products to wishlist </p>
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
}