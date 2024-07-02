import React, { Component } from 'react';
import NavBar from '../Accueil/navbar';
import Footer from '../Accueil/Footer';
import UpdateArticleForm from './UpdateArticleForm';

const UpdateArticle = () => {
    return ( 
        <React.Fragment>
            <NavBar />
            <UpdateArticleForm />
        </React.Fragment>
     );
}
 
export default UpdateArticle;