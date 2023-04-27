import { useState } from "react";
import AlertBox from "./AlertBox";
const ItemContent = ({ id, name, contact, onDel, deleteItem }) => {
  const [dialog, OnDialog] = useState(false);
  return (
    <>
    <tr className="item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{contact}</td>
      <td onClick={()=> OnDialog(true)} className="pointer">X</td>
    </tr>
    {dialog && <AlertBox onDialog={OnDialog} deleteItem={deleteItem} name={name}/>}
    </>
  );
};

export default ItemContent;
