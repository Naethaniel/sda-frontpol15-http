import { PostsModel } from "../models/posts.js";
import { PostsView } from "../views/posts.js";

export class PostsController {
    // Krok (6) inicjalizacja nowej instancji klasy = wywołanie metody constructor
    constructor() {
        this.model = new PostsModel();
        // Krok (8)
        this.view = new PostsView();
    }

    // Krok (16) wywolanie tej metody powoduje wykonanie zapytania do API za pomoca metody GET oraz "narysowanie" postow w pliku HTML
    getAndViewAllPosts() {
        this.model.getAllPosts() // Krok (17)
        .then((posts) => this.view.createPosts(posts)); // Krok (21) Jako argument uzyskujemy JSONA z postami, ktory zostaje przekazany do funkcji w klasie view -> createPosts
    }
}


