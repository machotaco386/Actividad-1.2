// Función para obtener usuarios de la API
const obtenerUsuarios = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => mostrarUsuarios(data))
        .catch(error => console.log('Error:', error));
};

// Función para mostrar los usuarios en el HTML
const mostrarUsuarios = (users) => {
    const usersUl = document.getElementById('posts2');
    usersUl.innerHTML = ''; // Limpiamos la lista antes de agregar nuevos usuarios
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        usersUl.appendChild(li);
    });
};

// Llamamos a la función para obtener y mostrar los usuarios
obtenerUsuarios();