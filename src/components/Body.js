import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mock-data";
import { useState } from "react";


const Body = () => {
    //state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    console.log(filteredList);
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className = "res-container">
               {
                    listOfRestaurants.map(restaurant => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)
               }
            </div>
        </div>
    )
}
// const Body = () => {
//     //state variable
//     let [listOfRes, setListOfRes] = useState(restaurants)
//     return (
//         <div className="body">
//             <div className="filter">
//                 <button className="filter-btn" 
//                 onClick={() => {
//                     listOfRes = listOfRes.filter(
//                         (res) => res.info.avgRating > 4.5
//                     );
//                     console.log(listOfRes);
//                 }}>
//                     Top Rated Restaurants</button>
//             </div>
//             <div className = "res-container">
//                {
//                     listOfRes.map(restaurant => <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>)
//                }
//             </div>
//         </div>
//     )
// }

const topRatedRest = (restaurants) => {
   restaurants.filter(restaurant => restaurant.info.avgRating > 5 );
   console.log(restaurants)
}

export default Body;