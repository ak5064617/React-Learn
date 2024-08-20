import { useEffect, useState } from "react";
import { CARD_API } from "../../data/staticData";

const useResturantData = (resId) => {
    const [resInfo, setResInfo]  = useState(null);

    console.log("CARD_API", CARD_API);
  useEffect(()=>{
    fetchData();
  },[])
  
 const fetchData =  async () => {
    
    const data = await fetch(CARD_API+resId);
    const tempdata = await data.json();
    setResInfo(tempdata);

  };
  console.log("resInfo",resInfo);
  return resInfo;

}

export default useResturantData;