import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import AjouterArticle from "./components/Ajouter Article/AJouterArticle";
import APropos from "./components/A Propos/APropos";
import Articles from "./components/Articles/Articles";
import UpdateArticle from "./components/Update Article/UpdateArticle";
import AfficherArticle from "./components/Afficher Article/AfficherArticle"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./state/posts/postSlice";
import Login from "./components/Login/Login";
import PrivateRoute from "./utils/PrivateRoute.jsx";
function App() {

  const {posts} = useSelector((store) => store.posts)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil posts={posts} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/articles" element={<Articles posts={posts} />} />
        <Route path="/article/:id" element={<AfficherArticle posts={posts} />} />
        {/* Private routes */}
        <Route path="/ajouter-article" element={<PrivateRoute Component={AjouterArticle} />} /> 
        <Route path="/updatepost/:id" element={<PrivateRoute Component={UpdateArticle} />} />
      </Routes>
    </Router>
  );
}

export default App;
