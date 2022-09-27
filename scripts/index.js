import { PostsController } from './controllers/posts.js';
import { CommentsController } from './controllers/comments.js';
import { PostsModel } from './models/posts.js';

const initApp = () => {
    console.clear();
    const postsController = new PostsController();
    const commentsController = new CommentsController();

    console.log(postsController);
    console.log(commentsController);

    postsController.getAndViewAllPosts();

    const postsModel = new PostsModel();
    postsModel.deletePost(1);
}

document.addEventListener('readystatechange', () => {
    if (document.readyState === "complete") {
        initApp();
    }
});