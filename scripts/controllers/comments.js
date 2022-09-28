import { CommentsView } from "../views/comments.js";
import { CommentsModel } from "../models/comments.js";

export class CommentsController {
    // Krok (11) jako ze tworzymy nowa instancje klasy CommentsController to wywolywany jest constructor
    constructor() {
        // Krok (12)
        this.model = new CommentsModel();
        // Krok (14)
        this.view = new CommentsView();
    }
}