import React from "react";

export const list = [
  { name: "Order", sortProperty: "order" },
  { name: "Title", sortProperty: "title" },
  { name: "Duration", sortProperty: "duration" },
  { name: "Date", sortProperty: "date" },
];

const MyPopupForm = () => {
  const [open, setOpen] = React.useState(true);
  const [category, setCategory] = React.useState("Order");

  return (
    // <div onClick={() => setOpen((prev) => !prev)} className="sort_popup">
    <div className="sort_popup">
      <div>
        <span className="sortBy">Sort by:</span>
        {category}
      </div>
      {open && (
        <ul>
          {list.map((obj, i) => {
            return (
              <li onClick={() => setCategory(obj.name)} key={i}>
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
