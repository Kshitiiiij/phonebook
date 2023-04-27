import React, { useState } from "react";
import ItemContent from "./ItemContent";


const Content = ({ data, setData, deleteItem }) => {

  const sortData = () => {
    const newData = data.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    console.log(newData);
    setData(newData);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>SN.</th>
            <th className="pointer" onClick={() => sortData()}>
              Name
            </th>
            <th>Contanct</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              let id = data.indexOf(item) + 1;
              return (
                <ItemContent
                  key={id}
                  id={id}
                  name={item.name}
                  contact={item.contact}
                  deleteItem={deleteItem}
                  // onDel={() => OnDialog(true)}
                />
              );
            })}
        </tbody>
      </table>
 
    </>
  );
};

export default Content;
