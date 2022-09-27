export class PostsModel {

    constructor() {
        console.log('Posts model instance created');
    }

    getAllPosts() {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        return fetch(URL).then((response) => response.json());
    }

    addPost(post) {

    }

    deletePost(postId) {
        const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const options = {
            method: 'DELETE'
        };
        return fetch(URL, options).then((response) => response.json());
        // return fetch(URL, { method: 'DELETE' }).then((response) => response.json());
    }

    editPost(postId, updatedPost) {

    }
}