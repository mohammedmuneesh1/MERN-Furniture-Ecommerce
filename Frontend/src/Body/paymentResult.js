import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../Admin/Axios/axiosInstance";

export default function PaymentResult(){
     const navigate= useNavigate();

     useEffect(()=>{
        setTimeout(async () => {
            try {
                const response = await axiosInstance.get('api/users/payment/success');
                console.log(response);
                if(response.status === 200){
                    navigate('/');
                }
            } catch (error) {
                // alert("error occured on payment success")
                console.log(error);
            }
            
        }, 3000);

     },[]);

  
      
    return(
        <>
        <div className="payment-success">
        <img  src="https://res.cloudinary.com/dawxhtums/image/upload/v1699851650/Ecommerce-images/ygdjpzrg9dqazmjeyyia.gif" alt="success-image"/>
        </div>
        </>
    )

}
