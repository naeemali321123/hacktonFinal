import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const data1 = useSelector((s) => s.product.data1);
  const { id, image, description, title } = data1;
  console.log("ProductDetail page fetch data1 by store", image, "title", title);

  return (
    <>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-md-6 text-center shadow">
            <img src={image} alt="" className="w-75" />
          </div>
          <div className="col-md-6 text-center shadow">
            <h2>{title}</h2>
            <br />
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}
