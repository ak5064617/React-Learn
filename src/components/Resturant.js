import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Resturant = () => {
    const [resturantData,setReturantData] = useState([]);
    const {resId} = useParams();
    console.log(resId);

  useEffect(()=>{
    getResturantData();
  },[])

  async function getResturantData(){
     let data = await fetch("sdfjklsdjf");
     setReturantData(data.json());
     console.log(resturantData);
  }
  return  (
      <div className="resturant-container">
        <h1>Haleem</h1>
        <div className="menu">
             <div>thali</div>     
        </div>
      </div>
    )
}

export default Resturant;