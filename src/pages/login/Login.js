import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase";

export default function Register() {
  const navigate = useNavigate();

  const [state, setState] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const changeHandlar = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandlar = async (e) => {
    e.preventDefault();
    toast("Loading...");
    setIsProcessing(true);
    await signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("ACCOUNT lOGIN SUCCESSFULY");
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${(errorCode, errorMessage)}`);
      })
      .finally(() => {
        setIsProcessing(false)
      });
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="row p-5 m-3 col-12 col-md-6 shadow">
        <div className="col-12 text-center">
          <h2> Login your Account</h2>
        </div>
        <form className="row g-3">
          <div className="col-12">
            <label for="validationServer01" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={state.email}
              className="form-control"
              id="validationServer01"
              onChange={changeHandlar}
              name="email"
              required
            />
          </div>

          <div className="col-12">
            <label for="validationServer02" className="form-label">
              password
            </label>
            <input
              onChange={changeHandlar}
              name="password"
              type="password"
              value={state.password}
              className="form-control"
              id="validationServer02"
              required
            />
          </div>
          <div className="col-md-12">
            {!isProcessing ? (
              <button
                onClick={submitHandlar}
                className="btn btn-success w-100"
                type="submit"
              >
                Login
              </button>
            ) : (
              <button
                onClick={submitHandlar}
                className="btn btn-success w-100 disabled"
                type="submit"
              >
                <div className="spinner-border spinner-border-sm text-warning disabled"></div>
              </button>
            )}
            <ToastContainer />
          </div>
        </form>
        <div className="row col-12 my-3 fw-bold">
          <Link to="/register">
            Registered your Account, if you don't have Account
          </Link>
        </div>
      </div>
    </div>
  );
}
