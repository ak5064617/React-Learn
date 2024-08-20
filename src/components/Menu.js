import { useState } from "react";
import ItemList from "./ItemList";

const Menu = (props) => {
  let [accordianToggle, setAccordianToggle] = useState(false);
  const { title, itemCards } = props.menu.card.card;
  return (
    <div className="w-8/12 flex justify-center ">
      <div className="w-full bg-gray-100 shadow-lg m-4 p-2 flex-col items-center justify-between rounded-lg" onClick={
            ("click",
            () => {
              setAccordianToggle((accordianToggle = !accordianToggle));
            })
          }>
        <div className="flex justify-between">
        <div className="text-bold text-2xl px-4">
          {title}({itemCards.length})
        </div>
        <div
          className="px-4"
        >
          ^
        </div>
        </div>
        <div className="px-4">
          {accordianToggle &&
            itemCards.map((item) => (
              <div>
                <ItemList key={item.id} item ={item} />
              <div className="h-[1px] w-full 1px solid bg-black"></div></div>
            ))}
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Menu;
