import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Search.scss";

const Search = (props) => {
  const [state, setState] = useState({
    search: props.searchConfirm,
    redirect: false,
  });

  const searchProducts = () => {
    props.searchProduct(state.search);
    if (props.redirectAfterSearch) {
      setState({ redirect: true });
    }
  };

  const redirectItems = () => {
    if (state.redirect) {
      return <Redirect to="/items" />;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchProducts();
    }
  };

  return (
    <>
      {redirectItems()}
      <div className="navbar navbar-expand-lg navbar-dark search">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img src="/img/Logo_ML.png" alt="Mercado Libre" />
          </Link>

          <div className="collapse navbar-collapse">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                value={state.search || ""}
                placeholder="Nunca dejes de buscar"
                onChange={(event) => setState({ search: event.target.value })}
                onKeyPress={handleKeyPress}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={searchProducts}
                >
                  <img src="/img/ic_search.png" alt="Mercado Libre"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
