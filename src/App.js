import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import "./App.css";
import { auth, db } from "./config/Firebase";
import Routing from "./routing/Routing";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/authSlice";
import { fetchProduct } from "./store/productSlice";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function App() {
  const productReducerState = useSelector((store) => store.product);
  const isAuthentication = useSelector((store) => store.auth.isAuthentication);
  const dispatch = useDispatch();
  console.log("isAuthentication fetch by store", isAuthentication);
  console.log("product Reducer State", productReducerState);

  const fakeApi = async () => {
    // await fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log("fake api data json", json);
    //     dispatch(fetchProduct(json));
    //   });

    const docRef = doc(db, "productInfo", "acmdgregy44");
    toast("Data Loading...");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      toast.success("Get Data Successfully");
      dispatch(fetchProduct(docSnap.data().data));
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user));
        fakeApi();
      } else {
        dispatch(logout());
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
