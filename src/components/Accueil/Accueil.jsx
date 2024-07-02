import React, { Component, useEffect, useState } from "react";
import NavBar from "./navbar";
import LatestArticles from "./latestArticles";
import Categories from "./categories";
import WithBackgroundImage from "./BackgroundImage";
import PostWithLike from "./BlogPostAccueil";
import Footer from "./Footer";
import axios from "axios";
import ProductContext from "../ProductsContext";

const Accueil = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const productValues = { products, setProducts };

  return (
    <ProductContext.Provider value={productValues}>
      <React.Fragment>
        <NavBar />
        <WithBackgroundImage />
        <LatestArticles />
        <Categories />
        <PostWithLike />
        <Footer />
      </React.Fragment>
    </ProductContext.Provider>
  );
};

export default Accueil;
