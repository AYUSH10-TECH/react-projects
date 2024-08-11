import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mock-data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //state variable
  let [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  console.log(" Body Render");

  // it will be called after render

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const restList = await data?.json();
    const liveRestaurants =
      restList?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.k;

    if (liveRestaurants) {
      setListOfRes(liveRestaurants);
      setFilteredRestaurants(liveRestaurants);
    }

    else{
        setListOfRes(restaurants);
        setFilteredRestaurants(restaurants);
    }
  };

  //     const json = await(data.json);
  // setListOfRes(json?.data?.cards[2]?.data?.data?.restaurants)

  // Conditional Rendering

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
