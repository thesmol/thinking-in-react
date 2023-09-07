import './App.css';

import SearchBar from "./components/SearchBar"
import ProductTable from "./components/ProductTable"


const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function FilterableProductTable({ products }) {
  return(
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};


function App() {
  return <FilterableProductTable products={PRODUCTS}/>;
}

export default App;
