import Header from "./Header"; // normal import in case of export default header
import ResturantCard from "./ResturantCards";
import { cards } from "../data/mockdata";  // name inport in case of export const cards
import {useState} from "react";

const Body = () => {

    const [cardsData, setcardsData] = useState(cards);

  return (
    <div className="body-container">
      <div className="filter-btn">
            <button
             onClick = {
                ()=>{
                   let filteredcards = cardsData.filter((card)=>{
                       return card.info.rating > 4
                    }) 
                    setcardsData(filteredcards);
                    console.log(temcards);
                }
             }
            
            >Filter the Resturant above rating 4</button>
      </div>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <ResturantCard key={card.info.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};


export default Body;