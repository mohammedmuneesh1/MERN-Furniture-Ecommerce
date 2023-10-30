import React from "react";
import { useNavigate } from "react-router-dom";
export default function AdminAside() {
  const navigate = useNavigate();
  return (
    <>
      <div className="a-dash">
        <h3
          onClick={(e) => {
            e.preventDefault();
            navigate("/Admin");
          }}
        >
          DASHBOARD
        </h3>
        <ul>
        <li>
            <span className="material-symbols-outlined">Home</span>
            <label
              onClick={(e) => {
                e.preventDefault();
                navigate("/Admin");
              }}
            >
              Home
            </label>
          </li>



          <li>
            <span className="material-symbols-outlined">person</span>
            <label
              onClick={(e) => {
                e.preventDefault();
                navigate("/Admin/Auser");
              }}
            >
              Users
            </label>
          </li>
          <li>
            <span className="material-symbols-outlined">attach_money</span>
            <label> Revenue</label>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              navigate("/Admin/Products");
            }}
          >
            <span className="material-symbols-outlined">
              production_quantity_limits
            </span>
            <label>Products</label>
          </li>
          <li    onClick={(e) => {
              e.preventDefault();
              navigate("/Admin/ProductAddPage");
            }}>
            <span className="material-symbols-outlined">add_circle</span>
            <label>Products</label>
          </li>
          <li>
            <span className="material-symbols-outlined">category</span>
            <select
              onChange={(e) => {
                e.preventDefault();
                const selectedValue = e.target.value;
            
                switch (selectedValue) {
                  case "Sofa":
                    e.preventDefault();
                    navigate("/Admin/Products/Sofa");
                    break;
                  case "bowls":
                    navigate("/Admin/Products/Bowl");
                    break;
                  case "lamps":
                    navigate("/Admin/Products/Lamp");
                    break;
                  case "plants":
                    navigate("/Admin/Products/Plant");
                    break;
                  case "mattress":
                    navigate("/Admin/Products/Mattress");
                    break;
                  case "appliances":
                    navigate("/Admin/Products/Appliances");
                    break;
                  default:
                    break;
                }
              }}
            >
              <option value="ptype">P-Type</option>
              <option value="Sofa">Sofa</option>
              <option value="bowls">Bowls</option>
              <option value="lamps">Lamps</option>
              <option value="plants">Plants</option>
              <option value="mattress">Mattress</option>
              <option value="appliances">Appliances</option>
            </select>
          </li>
          <li onClick={()=>navigate("/")}>
            <span className="material-symbols-outlined" >logout</span>
            <label>Log Out</label>
          </li>
        </ul>
      </div>
    </>
  );
}
