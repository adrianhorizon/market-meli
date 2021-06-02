import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import { NumberFormat } from "../utils/formatNumber";

const Product = ({
  info: { title, address, price, picture, id, free_shipping },
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="img-item-list-container">
            <Link to={`/items/${id}`}>
              <img className=" img-item-list" src={picture} alt={title} />
            </Link>
          </div>
          <div className="col text-col">
            <div className="price">
              <h5 className="price">
                {price.currency} {NumberFormat(price.amount)}{" "}
              </h5>
              {free_shipping && (
                <img
                  className=""
                  src="/img/ic_shipping.png"
                  alt="Envío gratis"
                />
              )}
            </div>

            <Link to={`/items/${id}`}>
              <p className="card-text item-title">{title}</p>
            </Link>
          </div>
          <div className="col text-col">
            <p className="card-text address-text">{address}</p>
          </div>
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default Product;
