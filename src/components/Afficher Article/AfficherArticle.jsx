import React, { Component } from "react";
import NavBar from "../Accueil/navbar";
import Article from "./Article";

const AfficherArticle = () => {
  return (
    <React.Fragment>
        <NavBar />
        <Article />
    </React.Fragment>
  );
};

export default AfficherArticle;
