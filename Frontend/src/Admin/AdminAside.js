import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyData } from "../Main-Component/MyData";

export default function AdminAside() {
  const navigate = useNavigate();
  const { lstatus, setLstatus } = useContext(MyData);

  const [selectedValue, setSelectedValue] = useState("P-Type");


  const handleNavigation = (route, newValue) => {
    setSelectedValue(newValue); // Set the selected value when navigating
    navigate(route);
  };

  return (
    <>
      <div className="a-dash">
        <h3
          onClick={() => {
            handleNavigation("/Admin", "P-Type");
          }}
        >
          DASHBOARD
        </h3>
        <ul>
          <li>
            <span className="material-symbols-outlined">Home</span>
            <label onClick={() => handleNavigation("/Admin", "P-Type")}>
              Home
            </label>
          </li>
          <li>
            <span className="material-symbols-outlined">person</span>
            <label onClick={() => handleNavigation("/Admin/Auser", "P-Type")}>
              Users
            </label>
            
          </li>
          <li onClick={() => handleNavigation("/Admin/Orders", "P-Type")}>
            <span className="material-symbols-outlined">attach_money</span>
            <label>Orders</label>
          </li>

          <li onClick={() => handleNavigation("/Admin/Revenue", "P-Type")}>
            <span className="material-symbols-outlined">attach_money</span>
            <label> Revenue</label>
          </li>
          <li onClick={() => handleNavigation("/Admin/Products", "P-Type")}>
            <span className="material-symbols-outlined">
              production_quantity_limits
            </span>
            <label>Products</label>
          </li>
          <li onClick={() => handleNavigation("/Admin/ProductAddPage", "P-Type")}>
            <span className="material-symbols-outlined">add_circle</span>
            <label>Products</label>
          </li>
          <li>
            <span className="material-symbols-outlined">category</span>
            <select
              onChange={(e) => {
                const newValue = e.target.value;
                handleNavigation(`/Admin/Products/${newValue}`, newValue);
              }}
              value={selectedValue}
            >
              <option value="ptype">P-Type</option>
              <option value="sofa">Sofa</option>
              <option value="Bowl">Bowls</option>
              <option value="Lamp">Lamps</option>
              <option value="Plant">Plants</option>
              <option value="Mattress">Mattress</option>
              <option value="Appliances">Appliances</option>
            </select>
          </li>
          <li onClick={() => handleNavigation("/", "P-Type")}>
            <span className="material-symbols-outlined">logout</span>
            <label
              onClick={() => {
                const confirmLogout = window.confirm(
                  "Are you sure you want to log out?"
                );

                if (confirmLogout) {
                  setLstatus(!lstatus);
                  localStorage.removeItem("jwtToken");
                }
              }}
            >
              Log Out
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
