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
      </div>

    </>
  );
}
