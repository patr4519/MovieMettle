import React from "react";

export const list = [
  { name: "Title", sortProperty: "title" },
  { name: "Duration", sortProperty: "duration" },
  { name: "Date", sortProperty: "date" },
];

const MyPopupForm = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="sort_popup">
      <span>Sort by:</span>
      {open && (
        <ul>
          {list.map((obj, i) => {
            return <li key={i}>{obj.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default MyPopupForm;
