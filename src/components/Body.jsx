import RestaurantCard from "./RestaurantCart";
import restList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfrestaurant, setlistOfrestaurant] = useState(restList);
  // console.log(listOfrestaurant);
  return (
    <div className="body">
      <div className="filter">
        <button
        className="filter-btn"
          onClick={() => {
            const filteredList = listOfrestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            // console.log(filteredList);
            setlistOfrestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfrestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={restList[1]} /> */}
      </div>
    </div>
  );
};

export default Body;
