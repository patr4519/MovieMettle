import React from "react";
import { useDispatch } from "react-redux";
import { sortBy } from "../redux/slices/favoritesSlice";

export const list = [
  { name: "Order", sortProperty: "order" },
  { name: "Title", sortProperty: "title" },
  { name: "Duration", sortProperty: "duration" },
  { name: "Date", sortProperty: "date" },
  { name: "Your Rate", sortProperty: "rate" },
];

const MyPopupForm = () => {
  const [category, setCategory] = React.useState("Order");
  const dispatch = useDispatch();

  const changeCategory = (name) => {
    setCategory(name)
    dispatch(sortBy(name))
  }

  return (
    <div className="sort_popup">
      <div>
        <span className="sortBy">Sort by:</span>
      </div>
      <ul>
          {list.map((obj, i) => {
            return (
              <li className={`${obj.name === category ? 'selected' : ''}`} onClick={() => changeCategory(obj.name)} key={i}>
                {obj.name}
              </li>
            );
          })}
        </ul>
    </div>
  );
};

export default MyPopupForm;
