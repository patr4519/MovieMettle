import React from "react";
import { useDispatch } from "react-redux";
import { sortBy } from "../redux/slices/favoritesSlice";

export const list = [
  { name: "Order", sortProperty: "order" },
  { name: "Title", sortProperty: "title" },
  { name: "Duration", sortProperty: "duration" },
  { name: "Date", sortProperty: "date" },
];

const MyPopupForm = () => {
  const [open] = React.useState(true);
  const [category, setCategory] = React.useState("Order");
  const dispatch = useDispatch();

  const changeCategory = (title) => {
    setCategory(title)
    dispatch(sortBy(title))
  }

  return (
    <div className="sort_popup">
      <div>
        <span className="sortBy">Sort by:</span>
        {category}
      </div>
      {open && (
        <ul>
          {list.map((obj, i) => {
            return (
              <li onClick={() => changeCategory(obj.name)} key={i}>
                {obj.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MyPopupForm;
