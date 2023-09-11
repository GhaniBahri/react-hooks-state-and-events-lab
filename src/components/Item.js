import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isChecked, setIsChecked]= useState(false)

  function handleChecked(){
    setIsChecked(()=>!isChecked)
  }

  const btnColor = isChecked? "remove" : "add"
  const btnText = isChecked? "Remove from Cart": "Add to Cart"
  const itemChecked = isChecked? "in-cart": ""
  return (
    <li className={itemChecked}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnColor} onClick={handleChecked}>{btnText}</button>
    </li>
  );
}

export default Item;
