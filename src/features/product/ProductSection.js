import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addProduct } from "../../store/productSlice";

export default function ProductSection() {
  const data = useSelector((store) => store.product.data);
  // console.log("sync by store product reducer state", data);
  // const dispatch = useDispatch();

  return (
    <>
      {data?.map((obj) => (
        <div
          key={obj.id}
          className="col-12 col-md-4 col-sm-6 d-flex justify-content-center"
        >
          <div className="card shadow-lg m-2" style={{ width: "18rem" }}>
            <img
              src={obj.image}
              className="card-img-top"
              alt="..."
              height={300}
            />
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title">{obj.title}</h5>
              <div className="text-center">
                <Link to="/" className="btn btn-success">
                  More Details
                </Link>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      ))}
    </>
  );
}
