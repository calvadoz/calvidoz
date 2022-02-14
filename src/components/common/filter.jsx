import React from "react";

const Filter = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          className={`list-group-item ${
            item._id === selectedItem._id ? "active" : ""
          }`}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Filter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Filter;
