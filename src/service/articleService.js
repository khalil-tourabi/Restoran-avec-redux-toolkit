import axios from "axios";

const articleAPI = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json"
    }
});

export const getArticles = async () => {
    return await articleAPI.get('/posts')
}

export const getArticleById = async (id) => {
    return await articleAPI.get(`/posts/${id}`)
}

export const addArticle = async (data) => {
    return await articleAPI.post('/posts', data);
}

export const updateArticle = async (id, data) => {
    return await articleAPI.put(`/posts/${id}`, data);
}

export const deleteArticle = async (id) => {
    return await articleAPI.delete(`/posts/${id}`);
}