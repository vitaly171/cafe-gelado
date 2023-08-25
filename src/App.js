import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Gallery from "./components/Gellery/Gallery";
import Reviews from "./components/Reviews/Reviews";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Advantages />
        <Gallery />
        <Reviews />
      </main>
    </>
  );
}
