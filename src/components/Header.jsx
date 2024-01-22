import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

export default function Header() {
  const [btnName, setBtnName] = useState("login");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL} className="logo"/>
        </div>
        <div className="company_name">
          <h1>
            Order <br></br>Food
          </h1>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button
              className="button"
              onClick={() => {
                btnName == "login" ? setBtnName("logout") : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
