

const ResturantCard = (props) => {
    const { cloudinaryImageId, name, cuisines, areaName, avgRating, costForTwo} = props.cardData.info;   //object destructuring 
    console.log( props.cardData.info)
  return (
    <div className="p-4 m-4 w-[250px] h-[350px] bg-slate-100 hover:bg-slate-200 rounded-lg">
      <div className="">
        <img className="h-[150px] w-[250px] rounded-lg"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
          alt="logo"
        />
      </div>
      <div className="font-bold py-2 text-lg">{name}</div>
      <div className="name">{cuisines}</div>
      <div className="name">{areaName}</div>
      <div className="name">{avgRating}</div>
      <div className="name">{costForTwo}</div>
    </div>
  );
};

export default ResturantCard;