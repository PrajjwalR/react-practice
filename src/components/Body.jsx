import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { useState, useEffect } from 'react'


const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [searchText, setSearchText] = useState("")
    let [allRestaurants, setAllRestaurants] = useState([])

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            )
            const json = await data.json();
            
            // Optional chaining to safely access the restaurant data
            const restaurantList = json?.data?.cards?.find(
                card => card.card?.card?.gridElements?.infoWithStyle?.restaurants
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            
            setListOfRestaurants(restaurantList);
            setAllRestaurants(restaurantList); 
        } catch (error) {
            console.error("Error fetching data:", error);
            setListOfRestaurants(resList);
        }
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>  
            <div className='filter'>
                <div className='search'>
                    <input type="text"  className='search-box' value={searchText} onChange={(e)=>{
                      setSearchText(e.target.value)  
                    }}/>
                    <button className='search-btn' onClick={() => {
                        const filteredRestaurants = allRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setListOfRestaurants(filteredRestaurants);
                    }}>
                        Search
                    </button>

                </div>
                <button className='filter-btn' 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                    setListOfRestaurants(filteredList); 
                }}>Top rated restaurants</button>
            </div>
            <div className='res-container'>
               {
                listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))
               }
            </div>
        </div>
    )
}

export default Body;
 