import React from "react";
import NavBar from "./navbar";
import LatestArticles from "./latestArticles";
import Categories from "./categories";
import WithBackgroundImage from "./BackgroundImage";
import PostWithLike from "./BlogPostAccueil";
import Footer from "./Footer";

const Accueil = () => {

  return (
      <React.Fragment>
        <NavBar />
        <WithBackgroundImage />
        <LatestArticles />
        <Categories />
        <PostWithLike />
        <Footer />
      </React.Fragment>
  );
};

export default Accueil;
