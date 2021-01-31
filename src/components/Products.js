import React from "react";
import formatCurrency from "../util";

function Products({ products }) {
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a href={"#" + product._id}>
                <div className="product__img">
                  <img src={product.image} alt={product.title} />
                </div>
                <p>{product.title}</p>
              </a>
              <div className="product__price">
                <div>{formatCurrency(product.price)}</div>
                <button className="button primary">Add To Cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
