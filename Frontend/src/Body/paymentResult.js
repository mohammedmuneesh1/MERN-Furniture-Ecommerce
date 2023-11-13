import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Admin/Axios/axiosInstance";

export default function PaymentResult(){
     const navigate= useNavigate();
     useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('api/users/payment/success');
                // console.log(response);
                if (isMounted && response.status === 200) {
                    navigate('/');
                }
            } catch (error) {
                console.log(error);
            }
        };
        const timeoutId = setTimeout(fetchData, 3000);
        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, []);
  



      
    return(
        <>
        <div className="payment-success">
        <img  src="https://res.cloudinary.com/dawxhtums/image/upload/v1699851650/Ecommerce-images/ygdjpzrg9dqazmjeyyia.gif" alt="success-image"/>
        </div>
        </>
    )

}
