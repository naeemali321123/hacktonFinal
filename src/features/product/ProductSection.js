import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { productDtlInfo } from "../../store/productDtlSlice";
import ProductDetail from "../../pages/productDetail/ProductDetail";
import { productDtl } from "../../store/productSlice";

export default function ProductSection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.product.data);

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
            <div className="card-body d-flex flex-column justify-content-end align-items-center">
              <h5 className="card-title my-4">{obj.title}</h5>
              <div className="text-center">
                <button
                  onClick={() => {
                    dispatch(productDtl(obj))
                    navigate('/productDetail')
                  }}
                  className="btn btn-success"
                >
                  More Details
                </button>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      ))}
    </>
  );
}
