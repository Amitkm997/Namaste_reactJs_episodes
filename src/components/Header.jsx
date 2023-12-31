import { LOGO_URL } from "../utils/constants"
  
  export default function Header() {
    return (
        <>
        <div className="header">
          <div className="logo-container">
            <img
              src={LOGO_URL}
              className="logo"
            />
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
            </ul>
          </div>
        </div>
      </>
    )
  }
  