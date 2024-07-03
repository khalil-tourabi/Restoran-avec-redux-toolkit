import React from "react";
import NavBar from "./navbar";
import LatestArticles from "./latestArticles";
import Categories from "./categories";
import WithBackgroundImage from "./BackgroundImage";
import PostWithLike from "./BlogPostAccueil";
import Footer from "./Footer";

const Accueil = ({posts}) => {

  return (
      <React.Fragment>
        <NavBar posts={posts} />
        <WithBackgroundImage />
        <LatestArticles posts={posts} />
        <Categories />
        <PostWithLike posts={posts} />
        <Footer />
      </React.Fragment>
  );
};

export default Accueil;
