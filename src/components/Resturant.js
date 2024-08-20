import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {CARD_API} from "/src/data/staticData";
import Menu from "./Menu";

const Resturant = () => {
    const [resturantData,setReturantData] = useState([]);
    const [menuCard, setMenuCard] = useState([]);
    const {resId} = useParams();

  useEffect(()=>{
    getResturantData();
  },[])

  async function getResturantData(){
     let data = await fetch(CARD_API+resId);
     let resData = await data.json(); // here data is a promise so we need to add await to resolve this promise and return data in resData
     setReturantData(resData.data?.cards[0]?.card?.card);
     const menus = resData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(card => card.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
     setMenuCard(menus);
  }
  return  (
      <div className="resturant-container flex-col justify-center mx-20">
        <h1 className="text-bold text-2xl">{resturantData?.text}</h1>
         <h2 className="text-bold text-lg" >Menus</h2>
        <div className="w-full flex flex-col justify-center items-center">
          {
            menuCard.map((menu, index)=> <Menu key ={index} menu = {menu}/>)
          }
  
        </div>
      </div>
    )
}

export default Resturant;