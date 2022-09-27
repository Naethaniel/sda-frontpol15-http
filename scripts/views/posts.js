export class PostsView {
    ROOT_SELECTOR = 'root';
    POSTS_CONTAINER_SELECTOR = 'posts';
    POST_CONTAINER_SELECTOR = 'post'

    constructor() {
        this.root = document.getElementById(this.ROOT_SELECTOR);
        // Zapis z linii 2 oraz 3 to tak na prawde skrót, który wykonać tymi komendami:
        // this.ROOT_SELECTOR = 'root';
        // this.POSTS_CONTAINER_SELECTOR = 'posts';
    }

    createPosts(posts) {
        const postsContainer = document.createElement('div');
        // const postContainer = new HTMLDivElement()
        postsContainer.setAttribute('id', this.POSTS_CONTAINER_SELECTOR);
        // <div id="posts"></div>

        // [{ name: 'post1' }, { name: 'post2' }]
        for(const post of posts) {
            const postContainer = document.createElement('div');
            const deleteButton = document.createElement('button');
            postContainer.setAttribute('id', post.id);
            postContainer.setAttribute('class', this.POST_CONTAINER_SELECTOR);

            const idElement = document.createElement('span');
            const titleElement = document.createElement('span');
            const bodyElement = document.createElement('span');

            // <span>metoda appendChild tutaj doda element</span>
            idElement.appendChild(
                // document.createTextNode('ID: ' + post.id);
                document.createTextNode(`ID: ${post.id}`)
            );
            titleElement.appendChild(
                // document.createTextNode('Title: ' + post.id);
                document.createTextNode(`Title: ${post.title}`)
            );
            bodyElement.appendChild(
                // document.createTextNode('Body: ' + post.id);
                document.createTextNode(`Body: ${post.body}`)
            );
            deleteButton.append(
                document.createTextNode('Usuń posta')
            );

            postContainer.appendChild(idElement);
            postContainer.appendChild(titleElement);
            postContainer.appendChild(bodyElement);
            postContainer.appendChild(deleteButton);
            postsContainer.appendChild(postContainer);
        }

        this.root.appendChild(postsContainer);
    }
    
}