import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background for home"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
            price={299.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="GE Profile Opal | Countertop Nugget Ice Maker | Portable Ice Machine Makes up to 24 lbs. of Ice Per Day | Stainless Steel Finish"
            price={479.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/810et96FfhL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Brother P-touch, PTD210, Easy-to-Use Label Maker, One-Touch Keys, Multiple Font Styles, 27 User-Friendly Templates, White"
            price={59.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/81qdOn+31VL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="WD_BLACK 1TB SN850 NVMe Internal Gaming SSD Solid State Drive with Heatsink - Works with Playstation 5, Gen4 PCIe, M.2 2280, Up to 7,000 MB/s - WDS100T1XHE"
            price={130.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/719mkEAj1IL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title={`GIGABYTE M28U 28" 144Hz Gaming Monitor, 3840 x 2160 SS IPS Display, 2ms (MPRT) Response Time, 94% DCI-P3, VESA Display HDR400, FreeSync Premium Pro, 1x Display Port 1.4, 2x HDMI 2.1`}
            price={599.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71CnfsZex2S._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Logitech MX Master 3 Advanced Wireless Mouse, Ultrafast Scrolling, Ergonomic, 4000 DPI, Customization, USB-C, Bluetooth, USB, Apple Mac, Microsoft PC Windows, Linux, iPad - Graphite"
            price={99.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/614w3LuZTYL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
