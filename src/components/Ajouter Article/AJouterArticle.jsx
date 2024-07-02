import React, { Component } from 'react';
import NavBar from '../Accueil/navbar';
import Footer from '../Accueil/Footer';
import AjouterArticleForm from './AjouterArticleForm'

const AjouterArticle = () => {
    return ( 
        <React.Fragment>
            <NavBar />
            <AjouterArticleForm />
        </React.Fragment>
     );
}
 
export default AjouterArticle;