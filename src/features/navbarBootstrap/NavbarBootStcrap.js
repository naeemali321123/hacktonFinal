import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { auth } from "../../config/Firebase";
import { signOut } from "firebase/auth";
import { logout } from "../../store/authSlice";

export default function NavbarBootStcrap() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthentication = useSelector((state) => state.auth.isAuthentication);
  console.log("navbar bootstrap useSelector get state.auth", isAuthentication);
  const logoutHandlar = () => {
    signOut(auth);
    navigate("/login");
    dispatch(logout())
  };
  
  const AddProduct = () => {
    navigate("/addProduct");
  };
  const loginHandlar = () => {
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark d-flex justify-content-center">
      <div className="container-fluid text-light">
        <Link className="navbar-brand" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Real-Estate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu bg-light">
                <li>
                  <a className="dropdown-item" to="#">
                    Action
                  </a>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="search">
              Search
            </button>
          </form>
          <div>
            {isAuthentication ? (
              <>
                <button onClick={AddProduct} className="btn mx-2 mt-md-0 mt-2 btn-outline-primary">
                  Add Product
                </button>
                <button
                  onClick={logoutHandlar}
                  className="btn mt-2 mt-md-0 btn-outline-primary"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={loginHandlar}
                className="btn mt-2 mx-2 mt-md-0 btn-outline-primary"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
