import RestaurantCard from "./RestaurantCart";
// import restList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfrestaurant, setlistOfrestaurant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    //because we have used api to fetch data therefore we no longer need the mockData(hard coded data)
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    // console.log(json)
    let a =
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(a)
    setlistOfrestaurant(a);
    setFilteredRestaurant(a)
  };
  //conditional rendering: rendering on the basis of condition is known as condition rendering
  // if(listOfrestaurant.length===0){
  //   return <Shimmer/>
  // }

  return listOfrestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search_box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log(listOfrestaurant)
              const filterText = listOfrestaurant.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filterText);
              setFilteredRestaurant(filterText);
              
              console.log(listOfrestaurant)  
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={restList[1]} /> */}
      </div>
    </div>
  );
};

export default Body;
