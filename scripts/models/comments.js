export class CommentsModel {

    // Krok(13)
    constructor() {
        console.log('Comments model instance created');
    }

    // Pobranie wszystkich komentarzy dla konkretnego postu
    getAllComments(postId) {
        // Adres zasobu
        const URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        // const URL = `https://jsonplaceholder.typicode.com/posts/comments?postId=${postId}`;
        // Wykonanie zapytania
        return fetch(URL) 
            // Zwrocenie odpowiedzi w formie JSON
            .then((response) => response.json());
    }

    addComment(comment) {
        // Adres zasobu
        const URL = `https://jsonplaceholder.typicode.com/posts/${comment.postId}/comments`;
        // Cialo dla zapytania typu POST
        const body = {
            postId: comment.postId,
            email: comment.email,
            name: comment.name,
            body: comment.body
        };
        // Ustawienie typu metody oraz ciala zapytania
        const options = {
            method: 'POST',
            body: JSON.stringify(body)
        }
        // Wykonanie zapytania
        return fetch(URL, options)
            //zwrocenie odpowiedzi w formie JSON
            .then((response) => response.json());
    }

    deleteComment(commentId) {
        // Adres zasobu
        const URL = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
        // Ustawienie typu zapytania
        const options = {
            method: 'DELETE'
        };
        // Wykonanie zapytania
        return fetch(URL, options).then((response) => response.json());
    }
}