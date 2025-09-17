async function obtenerPostsConAsyncAwait() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Error en la llamada a la API');
        }
        let posts = await response.json();
        mostrarPosts(posts);
    } catch (error) {
        console.log('Error:', error);
    }
}

function mostrarPosts(posts) {
    const postsUl = document.getElementById('posts');
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        postsUl.appendChild(li);
    });
}

obtenerPostsConAsyncAwait();




