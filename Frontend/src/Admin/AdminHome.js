import React from "react";
import { Outlet } from 'react-router-dom'

import "./Admin.css";



import AdminHead from "./AdminHead";
import AdminAside from "./AdminAside";
import AdminBody from "./AdminBody";
export default function AdminHome() {
  return (
    <>
      <div className="a-home">
        <AdminHead/>
        <AdminAside/>
        <AdminBody/>
        <Outlet/>    
       
      
        {/* use outlet to remove reendering of above elements(malayalam:ee codeil outeltnte meeleyulla elements re-render aavilla but outletnte adiyil ulla element re- render aavum . so ekane cheyyunnathiloode njmmkk meeleyulla <head><aide> permanent aayi ellaa componenetsne vekkaam) */}
                   
    


      </div>
      {/* <div className="a-body">

        <div className="a-dash">
          <h2>Admin</h2>
          <ul>
            <li>
              <span className="material-symbols-outlined">person</span>
              <label>Users</label>
            </li>
            <li>
              <span className="material-symbols-outlined">production_quantity_limits</span>
    
              <label>Products</label>
            </li>
            <li>
              <span className="material-symbols-outlined">logout</span>
              <label>Log Out</label>
            </li>
            <li>
            <MDBDropdown  >
      <MDBDropdownToggle size="sm">Category</MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem >Sofa</MDBDropdownItem>
        <MDBDropdownItem >Mattress</MDBDropdownItem>
        <MDBDropdownItem ></MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
            </li>
          </ul>
        </div>

        <div className="a-content">
          <header className="a-head">Hello, AshiqueAli 👋</header>
        
        </div>

      </div> */}
    </>
  );
}
