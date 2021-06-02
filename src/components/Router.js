import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProducts from "./ListProducts";
import ProductDetail from "./ProductDetail";
import API from "../utils/api";

const Router = () => {
  const [state, setState] = useState({
    products: [],
    searchType: "",
    categories: [],
    loading: false,
  });

  useEffect(() => {
    if (state.searchType) {
      searchProduct(state.searchType);
    }
  }, [state.searchType]);

  const searchProduct = async (type) => {
    const product = await API.searchProduct(type);
    setState({ products: product.items, categories: product.categories });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ListProducts
              products={state.products}
              categories={state.categories}
              searchProduct={searchProduct}
              searchType={state.searchType}
              loading={state.loading}
            />
          )}
        ></Route>
        <Route
          exact
          path="/items"
          render={() => (
            <ListProducts
              products={state.products}
              categories={state.categories}
              busquedaProducto={searchProduct}
              terminoBusqueda={state.searchType}
            />
          )}
        ></Route>
        <Route
          exact
          path="/items/:id"
          render={(props) => {
            let idProduct = props.location.pathname.replace("/items/", "");
            return (
              <ProductDetail
                id={idProduct}
                categories={state.categories}
                searchProduct={searchProduct}
                searchType={state.searchType}
              />
            );
          }}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
