import { CommentsView } from "../views/comments.js";
import { CommentsModel } from "../models/comments.js";

export class CommentsController {
    constructor() {
        this.model = new CommentsModel();
        this.view = new CommentsView();
    }
}