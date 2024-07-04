import React, { Component } from 'react';
import NavBar from '../Accueil/navbar';
import Footer from '../Accueil/Footer';
import UpdateArticleForm from './UpdateArticleForm';

const UpdateArticle = ({posts}) => {
    return ( 
        <React.Fragment>
            <NavBar />
            <UpdateArticleForm posts={posts} />
        </React.Fragment>
     );
}
 
export default UpdateArticle;