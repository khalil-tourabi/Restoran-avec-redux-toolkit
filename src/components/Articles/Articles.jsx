import React, { Component } from 'react';
import NavBar from '../Accueil/navbar';
import ArticlesPage from './articlesPage';

const Articles = () => {
    return ( 
        <React.Fragment>
            <NavBar />
            <ArticlesPage />
        </React.Fragment>
     );
}
 
export default Articles;