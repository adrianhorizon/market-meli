import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import Breadcrumbs from "./Breadcrumbs";
import Search from "./Search";
import { NumberFormat } from "../utils/formatNumber";
import API from "../utils/api";

const ProductDetail = (props) => {
  const [state, setState] = useState();

  useEffect(() => {
    if (props.id) {
      async function productId() {
        const product = await API.productId(props.id);
        setState(product);
      }

      productId();
    }
  }, [props.id]);

  if (!state) {
    return null;
  }

  return (
    <>
      <Search
        searchProduct={props.searchProduct}
        redirectAfterSearch={true}
        searchConfirm={props.searchConfirm}
      />
      <div className="container">
        <Breadcrumbs categories={state.breadcrumb} />
        <div className="row">
          <div className="col-lg-12">
            <div className="card item-detail">
              <div className="card-body">
                <div className="product-container">
                  <div className="col-lg-9">
                    <div className="row">
                      <div className="img-container">
                        <img
                          className="card-img-top img-detail"
                          src={state.items.picture}
                          alt={state.items.title}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <p className="desciption-title">
                        {state.author.name} {state.author.lastname}
                      </p>
                      <p className="desciption-title">
                        Descripción del producto{" "}
                      </p>
                      <p className="product-description">
                        {state.items.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <span className="condition">
                      {state.items.condition} - {state.items.sold_quantity}{" "}
                      vendidos
                    </span>
                    <h5 className="card-text title">{state.items.title}</h5>
                    <h3 className="price">
                      {state.items.price.currency}{" "}
                      {NumberFormat(state.items.price.amount)}
                    </h3>
                    <div className="buy-button">
                      <button className="btn btn-block">Comprar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
