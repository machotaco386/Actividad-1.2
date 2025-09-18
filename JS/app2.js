// Función para obtener usuarios de la API (esta no necesita cambios)
const obtenerUsuarios2 = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => mostrarUsuarios2(data))
        .catch(error => console.log('Error:', error));
};

// Función para mostrar los usuarios en el HTML (aquí hacemos los cambios)
const mostrarUsuarios2 = (users) => {
    const usersUl = document.getElementById('posts3');
    usersUl.innerHTML = ''; // Limpiamos la lista

    users.forEach(user => {
        const li = document.createElement('li');
        
        // Usamos .innerHTML para construir una tarjeta más completa
        // con saltos de línea (<br>) para separar la información.
        li.innerHTML = `
            <strong>${user.name}</strong><br>
            Email: ${user.email}<br>
            Teléfono: ${user.phone}<br>
            Ciudad: ${user.address.city}<br>
            Empresa: ${user.company.name}
        `;
        
        // Agregamos un poco de estilo para que se vea como una tarjeta
        li.style.border = "1px solid #ddd";
        li.style.padding = "10px";
        li.style.marginBottom = "10px";
        li.style.borderRadius = "5px";

        usersUl.appendChild(li);
    });
};

// Llamamos a la función para obtener y mostrar los usuarios
obtenerUsuarios2();

