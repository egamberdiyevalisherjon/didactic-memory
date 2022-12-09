import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Showcase from "../Components/Showcase";
import Premium from "../Components/Premium";
import NewProducts from "../Components/NewProducts";
import BestSeller from "../Components/BestSeller";

const Home = ({ products }) => {
  return (
    <div>
      <Header />
      <Showcase />
      <Premium products={products} />
      <NewProducts products={products} />
      <BestSeller products={products} />
      <Footer />
    </div>
  );
};

export default Home;
