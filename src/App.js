import React, { useState } from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

import "./index.css";

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const filterSize = (event) => {
    if (event.target.value === "") {
      setSize(event.target.value);
      setProducts(data.products);
    } else {
      setSize(event.target.value);
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        )
      );
    }
  };

  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);
    setProducts(
      data.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : sort === "latest"
            ? setProducts(data.products)
            : a._id < b._id
            ? 1
            : -1
        )
    );
  };

  return (
    <div className="grid-container">
      <header className="App-header">
        <a href="/">Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterSize={filterSize}
              sortProducts={sortProducts}
            />
            <Products products={products}></Products>
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
};

export default App;
