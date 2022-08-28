import React from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
export default function Products() {
  return (
    <>
      {data.map((obj) => (
        <div className="col-12 col-md-4 col-sm-6 d-flex justify-content-center">
          <div className="card shadow-lg m-2" style={{ width: "18rem" }}>
            <img src={obj.productImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{obj.cardTitle}</h5>
              <p className="card-text">{obj.cardDscp}</p>
              <div className="text-center">
                <Link to="/" className="btn btn-success">
                  Add Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
