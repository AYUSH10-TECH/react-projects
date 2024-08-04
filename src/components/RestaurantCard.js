import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info;

    return (
        <div className="res-card" style = {{backgroundColor: "f0f000"}}>
            <img 
            className="res-logo"
            alt = "res-logo"
            src = { CDN_URL+ 
                cloudinaryImageId
            }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.deliveryTime}</h4>
        </div>
    )
} 

export default RestaurantCard