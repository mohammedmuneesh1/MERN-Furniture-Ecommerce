import React, { useContext } from "react";
import { MyData } from "../Main-Component/MyData";
export default function AdminHead() {
  const {displayname}=useContext(MyData);
  return (
    <div className="a-nav">
    <h2>Hello {displayname} 👋</h2>
  </div>
  );
}
