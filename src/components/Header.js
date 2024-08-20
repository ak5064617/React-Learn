import { Provider, useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Store from "/src/utils/Store";

const Header = () => {
   

  // subscribing to the store by using useSelector
  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);
  return (
    <div className="mb-10">
      <div className="flex justify-between bg-pink-100 shadow-lg m-2 h-[200px]">
        <div className="logo-container">
          <img className="w-56"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XjeQOF8TgkWx36r-CuALOo_5epkqiGln7dRR5i2yKJjQuYbk2e00s4UafQ&s"
            alt="logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4">
            <li  className="px-8 text-bold text-xl"><Link to="/">Home</Link></li>
            <li  className="px-8 text-bold text-xl" ><Link to="/offer">Offers</Link></li>
            <li  className="px-8 text-bold text-xl">Help</li>
            <li  className="px-8 font-bold text-xl"><Link to="/cart">Cart {cartItems.length}</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
