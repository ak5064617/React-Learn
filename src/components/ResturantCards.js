

const ResturantCard = (props) => {
    const { cloudinaryImageId , name,cuisines,areaName} = props.cardData.info;

    console.log(props);
  return (
    <div className="card">
      <div className="logo">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
          alt="logo"
        />
      </div>
      <div className="name">{name}</div>
      <div className="name">{cuisines}</div>
      <div className="name">{areaName}</div>
    </div>
  );
};

export default ResturantCard;