import Content from "./Content";
import AddData from "./AddData";
import { useState } from "react";
import "./App.css";
import SearchData from "./searchData";
const App = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const [search, setSearch] = useState("");

  // To delete item from state and local storage
  const deleteItem = (name) => {
    const newData = data.filter((item) => item.name !== name);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <div className="contianer">
      <AddData data={data} setData={setData} />
      <div>
        <SearchData search={search} setSearch={setSearch} />

        {/* filters the data based on the search input otherwise displays full state*/}
        <Content
          data={data.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )}
          setData={setData}
          deleteItem={deleteItem}
        />
      </div>
    </div>
  );
};

export default App;
