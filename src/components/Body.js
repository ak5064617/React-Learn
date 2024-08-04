import Header from "./Header"; // normal import in case of export default header
import ResturantCard from "./ResturantCards";
import { cards } from "../data/mockdata";  // name inport in case of export const cards
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [cardsData, setcardsData] = useState([]); // Always use inside component, if useState data will change the component will re-render 
    const [filteredCards, setFilteredCards] = useState([]);
    const [searchText, setSearchText] = useState("");


   // if no dependency array => useEffect is called on Every Component Render
   // if dependecy array is emppty [] => useEffect will called only once on component loading
   // if dependecy array is not empty => useEffect is called every time if dependency will change/update 

   useEffect(()=>{
    getResturantData();
   },[])

   async function getResturantData() {      //API Call
       let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       data = await data.json();  
       setcardsData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);   // optional chaining
       setFilteredCards(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }
  if(cardsData.length === 0){
    return <Shimmer />
  }
  return (
    <div className="body-container">
      <div className="search-box">
        <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)}
        />
        <button onClick= { ()=>{
          let  fiteredData = cardsData.filter(res=> res.info.name.includes(searchText))
          setFilteredCards(fiteredData);
        }
        }
        >Search</button>
      </div>
      <div className="filter-btn">
            <button
             onClick = {
                ()=>{
                   let filteredcards = cardsData.filter((card)=>{
                       return card.info.avgRating > 4
                    }) 
                    setFilteredCards(filteredcards);
                }
             }
            
            >Filter the Resturant above rating 4</button>
      </div>
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <ResturantCard key={card.info.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};


export default Body;