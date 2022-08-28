import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import "./App.css";
import { auth } from "./config/Firebase";
import Routing from "./routing/Routing";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import { useNavigate } from "react-router-dom";
import { addProduct } from "./store/productSlice";
import { toast } from "react-toastify";

function App() {
  const isAuthentication = useSelector((store) => store.auth.isAuthentication);
  const dispatch = useDispatch();
  console.log("isAuthentication fetch by store", isAuthentication);

  const fakeApi = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log("fake api data", json);
        dispatch(addProduct(json));
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
        fakeApi();
      } else {
        dispatch(logout())
      }
    });
  }, []);
  return (
    <div>
      <Routing />
    </div>
  );
}

export default App;
