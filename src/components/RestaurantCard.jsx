import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className='res-card'>
            <img className='res-logo' alt="Food image" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>ETA - {resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;