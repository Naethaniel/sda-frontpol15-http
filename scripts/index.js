import { PostsController } from './controllers/posts.js';
import { CommentsController } from './controllers/comments.js';
import { PostsModel } from './models/posts.js';
import { CommentsModel } from './models/comments.js';


const initApp = () => {
    // Krok (5)
    // Wyczyszczenie konsoli
    console.clear();
    // Mamy tworzoną instancje klasy PostsController()
    const postsController = new PostsController();
    // Krok (10)
    const commentsController = new CommentsController();
    // Krok(15) załadowanie postów z API oraz stworzenie struktury w HTML
    postsController.getAndViewAllPosts();

    // Krok (22) UWAGA! Tak na prawde ten krok wykona sie po kroku (19)
    // Dlaczego? Poniewa krok (19) zwraca Promise i dopiero jak zostanie wykonany wtedy wszsystkie funkcje .then(..) zostana wywolane
    const commentsModel = new CommentsModel();

    commentsModel.addComment({
        postId: 1,
        email: 'test@test.com',
        name: 'Nazwa',
        body: 'Jakies cialo'
    });

    commentsModel.deleteComment(5);
}

document.addEventListener('readystatechange', () => { // Krok (4)
    if (document.readyState === "complete") {
        initApp();
    }
});