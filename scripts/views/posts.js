export class PostsView {
    ROOT_SELECTOR = 'root';
    POSTS_CONTAINER_SELECTOR = 'posts';
    POST_CONTAINER_SELECTOR = 'post'

    // Krok (9)
    constructor() {
        // Referencja(wskaźnik) do diva o id 'root'
        this.root = document.getElementById(this.ROOT_SELECTOR);
        // Zapis z linii 2 oraz 3 to tak na prawde skrót, który wykonać tymi komendami:
        // this.ROOT_SELECTOR = 'root';
        // this.POSTS_CONTAINER_SELECTOR = 'posts';
    }

    // Krok (22) Rysowanie postow w przeglądarce dla uzytkownika
    createPosts(posts) {
        // const postContainer = new HTMLDivElement()
        // Tworzymy nowy element typu = <div></div>
        const postsContainer = document.createElement('div');
        // Funcjka setAttribute dodaje nam ID dla tego diva <div id="posts"></div>
        postsContainer.setAttribute('id', this.POSTS_CONTAINER_SELECTOR);

        // [{ name: 'post1' }, { name: 'post2' }]
        // Iteracja po otrzymanych postach z API
        for(const post of posts) {
            // Tworzymy diva w ktorym bedziemy trzymac posty
            const postContainer = document.createElement('div');
            // Tworzymy button ktory bedzie sluzyc usuwaniu postow
            const deleteButton = document.createElement('button');
            // Nadajemy divowi z postami atrybut ID <div id="ID_POSTA"></div>
            postContainer.setAttribute('id', post.id);
            // Nadajemy divowi z postami clase <div id="ID_POSTA" class="posts"></div>
            postContainer.setAttribute('class', this.POST_CONTAINER_SELECTOR);

            // Tworzymy <span></span> dla ID
            const idElement = document.createElement('span');
            // Tworzymy <span></span> dla Title
            const titleElement = document.createElement('span');
            // Tworzymy <span></span> dla Body
            const bodyElement = document.createElement('span');

            // <span>metoda appendChild tutaj doda napis ID: ID_POSTA</span>
            idElement.textContent = `ID: ${post.id}`;
            // idElement.appendChild(
            //     // document.createTextNode('ID: ' + post.id);
            //     document.createTextNode(`ID: ${post.id}`)
            // );
            titleElement.textContent = `Title: ${post.title}`;
            // titleElement.appendChild(
            //     // document.createTextNode('Title: ' + post.id);
            //     document.createTextNode(`Title: ${post.title}`)
            // );
            bodyElement.textContent = `Body: ${post.body}`;
            // bodyElement.appendChild(
            //     // document.createTextNode('Body: ' + post.id);
            //     document.createTextNode(`Body: ${post.body}`)
            // );
            deleteButton.textContent = 'Usuń posta';
            // deleteButton.append(
            //     document.createTextNode('Usuń posta')
            // );

            // do diva <div id="ID_POSTA" class="posts"></div> doklejamy elementy do środka:
            /*
            <div id="ID_POSTA" class="posts">
                <span>ID: </span>
                <span>Title: </span>
                <span>Body: </span>
                <button>Usun posta</button>
            </div>

           */
            postContainer.appendChild(idElement);
            postContainer.appendChild(titleElement);
            postContainer.appendChild(bodyElement);
            postContainer.appendChild(deleteButton);
            /*
            <div id="posts">
                <div id="ID_POSTA" class="posts">
                    <span>ID: </span>
                    <span>Title: </span>
                    <span>Body: </span>
                    <button>Usun posta</button>
                </div>
                ...
                ...
                ...
                wykona sie kilka razy w zaleznosci od tego ile jest postow do wyswietlenia
            </div>
            */
            postsContainer.appendChild(postContainer);
        }

        this.root.appendChild(postsContainer);
    }
    
}