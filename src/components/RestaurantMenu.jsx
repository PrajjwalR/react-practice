import { useEffect } from "react"

const RestaurantMenu = () => {
    useEffect(()=> {
        fetchMenu()
    }, [])

    const fetchMenu = async ()=>{

        // const swiggyURL = "http://swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.46310&lng=80.34790&restaurantId=1027537&catalog_qa=undefined&submitAction=ENTER"
        // const data = await fetch(`https://corsproxy.io/?${encodeURIComponent(swiggyURL)}`)
        const data = await fetch("http://swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.46310&lng=80.34790&restaurantId=1027537&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json()
        console.log(json)
    }

  return (
    <div className="restaurant-menu">
        <h1>Restaurant Name</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burger</li>
            <li>Kebab</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu