import React, { Component } from 'react';
import NavBar from '../Accueil/navbar';
import ArticlesPage from './articlesPage';

const Articles = ({posts}) => {
    return ( 
        <React.Fragment>
            <NavBar />
            <ArticlesPage posts={posts}/>
        </React.Fragment>
     );
}
 
export default Articles;