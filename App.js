import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img
            src="https://th.bing.com/th/id/OIP.mQPOaVOGJw9TKje9diq91QHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="logo"
          />
        </div>
        <div className="company_name">
            <h1>Order <br></br>Food</h1>
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
  );
};

const RestaurantCard=(props)=>{
  const {resName,cusine,rating,time}=props
    return(
        <div className="rest-card">
           
           <img 
                alt="Meghanan" 
                className="res-logo" 
                src="https://th.bing.com/th/id/OIP.lFxGfkfGtiUeB4RUv7wzOQHaES?rs=1&pid=ImgDetMain"
           />
           <h3>{resName}</h3>
           <h4>{cusine}</h4>
           <h4>{rating} Stars</h4>
           <h4>{time}</h4>
           
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
           <div className="search">Search</div>
           <div className="res-container">
            <RestaurantCard 
            resName="Meghana foods" 
            cusine="Biryani, North Indian, Asian"
            rating="4.4"
            time="30 minutes"/>
            <RestaurantCard 
            resName="KFC" 
            cusine="Burger, Fast Food" 
            rating="5.0"
            time="15 minutes"/>
            
           </div>
        </div>
    )
}
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //this code will be replaced by jsx code you can see the output
root.render(<App />);
