import { useSelector } from "react-redux";
import ItemList from "./ItemList";


const Cart = () => {
    const cartIems = useSelector(store => store.cart.items);
    console.log("cartItems",cartIems);
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="w-8/12">
            {
                cartIems.map(item=>
                    <ItemList key ={item.item.id} item = {item.item}/>
                )
             }
            </div>
        </div>
    )
};

export default Cart;