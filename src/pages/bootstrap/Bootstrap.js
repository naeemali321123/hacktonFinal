import React from "react";
import "./Bootstrap.scss";
import ProductSection from "../../features/product/ProductSection";
import NavbarBootStcrap from "../../features/navbarBootstrap/NavbarBootStcrap";
import Slider from "../../features/slider/Slider";
import { useSelector } from "react-redux";

export default function Bootstrap() {
  const isLoginUser = useSelector((store)=>store.auth.isAuthentication)
  return (
    <div>
      <header className="text-white">
        <NavbarBootStcrap />
      </header>
      <main>
        <Slider />
        <div id="productSection" className="my-5">
          <h1 className="text-center pb-3">Latest Property</h1>
          <div className="container">
            <div className="row">{ isLoginUser?<ProductSection />:<div></div> }</div>
          </div>
        </div>
      </main>
    </div>
  );
}
