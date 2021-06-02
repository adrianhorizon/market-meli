import React from "react";
import Product from "./Product";
import Breadcrumbs from "./Breadcrumbs";
import Search from "./Search";
import "./ListProducts.scss";

const ListProducts = (props) => {
  return (
    <>
      <Search
        searchProduct={props.searchProduct}
        searchConfirm={props.searchConfirm}
      />
      <div className="container">
        <Breadcrumbs categories={props.categories} />
        <div className="product-list">
          {props.products && Object.keys(props.products).map((key) => (
            <Product info={props.products[key]} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListProducts;
