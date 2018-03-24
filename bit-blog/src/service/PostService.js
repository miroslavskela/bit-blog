import React from 'react';
import Post from '../entities/Post'
import Author from '../entities/Author'

class PostService {


    fetchPosts() {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json()


            })
            .then((data) => {
                const postData = data
                return postData.map((post) => {
                    return new Post(post)
                })

            })
    }
    fetchSinglePost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((post) => {
                return new Post(post);

            })
    }
    fetchAuthors(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                return response.json();    
            })
            .then((author) => {
               
                    return new Author(author)
                })
               

            
    }
}


export const postService = new PostService()