import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ItemList = (props) => {
  console.log("props", props);
  const { name, ratings, description, imageId } = props.item.card.info; // object destruting
  console.log(name);

  const cardDispatch = useDispatch();
  const addItemToCart = (item) => {
    cardDispatch(addItem(item));
  }

  return (
    <div className="flex justify-between mb-10 mt-8">
      <div className="flex-col w-6/12">
        <div className="font-bold text-lg">{name}</div>
        <div>
          {ratings.aggregatedRating.rating}(
          {ratings.aggregatedRating.ratingCountV2})
        </div>
        <div>{description}</div>
      </div>
      <div className=" w-6/12 flex justify-end">
        <img
          className="h-[150px] w-[150px] rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt="logo" 
        />
        <div className="mt-32 mr-3 rounded-lg h-[50px] w-[120px] absolute bg-cyan-50 to-green-500 flex justify-center items-center text-2xl text-green-600 font-bold" onClick={() => addItemToCart(props)}>
             Add +
        </div>
      </div>
    </div>
  );
};

export default ItemList;
