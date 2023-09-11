import { useState } from "react";
import "./styles.css";

const itemList = [
  "Apple",
  "Orange",
  "Banana",
  "Cherry",
  "Milk",
  "Peanuts",
  "Butter",
  "Tomato"
];

export default function App() {
  const [filteredList, setFilteredList] = useState(itemList);

  const filterBySearch = (event) => {
    console.log(event);
    const query = event.target.value;
    const updatedList = [...itemList].filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setFilteredList(updatedList);
  };

  return (
    <div className="App">
      <h1>Item Search Filter</h1>
      <input icon="search" placeholder="Search..." onChange={filterBySearch} />
      <ol>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
