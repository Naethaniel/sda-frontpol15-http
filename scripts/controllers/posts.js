import { PostsModel } from "../models/posts.js";
import { PostsView } from "../views/posts.js";

export class PostsController {
    constructor() {
        this.model = new PostsModel();
        this.view = new PostsView();
    }

    getAndViewAllPosts() {
        this.model.getAllPosts().then((posts) => this.view.createPosts(posts));
    }
}


