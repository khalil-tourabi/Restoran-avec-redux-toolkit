import React, { Component } from "react";
import NavBar from "../Accueil/navbar";
import Article from "./Article";

const AfficherArticle = ({posts}) => {
  return (
    <React.Fragment>
        <NavBar />
        <Article posts={posts} />
    </React.Fragment>
  );
};

export default AfficherArticle;
