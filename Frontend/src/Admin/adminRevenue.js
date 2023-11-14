import React, { useEffect, useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import axiosInstance from "./Axios/axiosInstance";
export default function AdminRevenue(){
    
    const [stat,setStat] = useState([])
    const revenueFn = async()=>{
        
        const token = localStorage.getItem('jwtToken')
   if(token){
        try{
            const response = await axiosInstance.get('/api/admin/stats')
            if(response.status === 200){
                setStat(response.data.data);
            }


        }
        catch(error){
            console.log("error on admin revenue side" + error.message)
        }
    }
    }


    useEffect(()=>{revenueFn()},[])

    return (
        <div className="a-body">
          <h1 className="text-center mt-3">REVENUE PER MONTH</h1>
          {stat.length > 0 ? (
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-5 mb-5 mt-5">
              <div className="content-box">
                <h6>Total Revenue</h6>
                <h2>{stat[0].revenue}</h2>
                {/* <p className="text-success">
                  <MDBIcon fas icon="user-alt" className="me-2" />
                  {Math.round(Math.random() * 100) / 10}%
                  <span className="text-muted"> Last Month</span>
                </p> */}
              </div>
    
              <div className="content-box">
                <h6>Total Product Purchased</h6>
                <h2>{stat[0].totalProductPurchased}</h2>
                {/* <p className="text-success">
                  <MDBIcon fas icon="user-alt" className="me-2" />
                  {Math.round(Math.random() * 100) / 10}%
                  <span className="text-muted"> Last Month</span>
                </p> */}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }