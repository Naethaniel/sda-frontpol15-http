class Comments {

    // Krok(13)
    constructor() {
        console.log('Comments instance created');
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

export class Posts {

    // Krok (7)
    constructor() {
        console.log('Posts instance created');
    }

    // Wykonanie zapytania typu GET do API aby pobrać liste postów
    getAllPosts() {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        // Krok (18) wywolanie funkcji fetch ktora domyslnie wykonuje zapytanie typu GET 
        return fetch(URL) // Krok (19) asynchronicznie leci zapytanie typu GET do API moze potrwać np. 2-3s
        .then((response) => response.json());  // Krok (20) po wykonaniu zapytania zostanie wywolana ta funckja, ktora przygotuje nam JSONa z postami za pomoca funkcji .json()
    }

    addPost(post) {
        // Adres zasobu -> z dokumentacji
        const URL = `https://jsonplaceholder.typicode.com/posts`;
        // Przygotowanie ciala -> w dokumentacji powinno byc opisane co jest wymagane/opcjonalne
        const body = {
            title: post.title,
            userId: post.userId,
            body: post.body
        };
        // Ustawienie metody typu POST oraz przygotowanie ciala zapytania
        const options = {
            method: 'POST',
            body: JSON.stringify(body)
        }
        // Wykonanie zapytania pod dany adres z opcjami i zwrocenie wyniku jako JSON
        return fetch(URL, options).then((response) => response.json());
    }

    deletePost(postId) {
        const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        const options = {
            method: 'DELETE'
        };
        return fetch(URL, options).then((response) => response.json());
        // return fetch(URL, { method: 'DELETE' }).then((response) => response.json());
    }

    editPost(updatedPost) {
        // Adres zasobu pod ktory nalezy wykonac zapytanie
        const URL = `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`;
        // Przygotowanie ciala zapytania - metoda PUT wymaga na nas zaktualizowania calego zasobu
        const body = {
            userId: updatedPost.userId,
            id: updatedPost.id,
            title: updatedPost.title,
            body: updatedPost.body
        };
        // Opcje dla zapytania - ustawienie metody PUT oraz przygotowanie ciala zapytania
        const options = {
            method: 'PUT',
            body: JSON.stringify(body)
        };
        // Wykonanie zapytania na podany adres z opcjami. Następnie zwrocenie odpowiedzi w formacie JSON
        return fetch(URL, options).then((response) => response.json());
    }

    // Przyklad obslugi bledow z funkcja FETCH
    errorHandlingExample() {
        // Jakiś fukcyjny adres URL ktory powinien zwrocic nam jakis blad
        const URL = 'https://www.iwillnotwork.com';
        // Wywolanie fukcji fetch aby wykonac zapytanie typu GET
        return fetch(URL)
        // Jezeli zapytanie udalo sie wykonac przejdz do funkcji .then
        .then((response) => {
            // Jezeli status odpowiedzi jest w przedziale 200-299 wtedy response.ok bedzie true
            if (response.ok) {
                // Odpowiedz jest poprawna, zwroc ja w formacie JSON
                return response.json();
                // jezeli kod odpowiedzi wynosi 404 (Not Found) obsluz bład i wypisz do konsoli
            } else if (response.status === 404) {
                console.log('Nie znaleziono zasobu pod tym adresem');
            }
        })
        // Jezeli nastapi problem z wykoneniem samego zapytania (nie mylic z bledem w sensie odpowiedzi z serwera)
        // wykonaj funkcje .catch
        // wywoluje sie np. przy problemie z CORS
        .catch((error) => console.log('Złapany błąd', error));
    }
}


const initApp = () => {
    console.clear();
    const posts = new Posts();
    const comments = new Comments();

    posts.getAllPosts();
    posts.addPost({
        userId: 5,
        title: 'Post title',
        body: 'Post body'
    });
    posts.deletePost(5);
    posts.editPost({
        postId: 2,
        title: 'Tytul',
        id: 5,
        name: 'Nazwa',
        email: 'test@test.com',
        body: 'Body'
    });

    comments.getAllComments();
    comments.addComment({
        postId: 1,
        email: 'test@test.com',
        name: 'Nazwa',
        body: 'Jakies cialo'
    });
    comments.deleteComment(5);
}

document.addEventListener('readystatechange', () => { // Krok (4)
    if (document.readyState === "complete") {
        initApp();
    }
});