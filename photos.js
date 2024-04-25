// photos.js
document.getElementById('addPhoto').addEventListener('click', () => {
    document.getElementById('photoForm').classList.remove('d-none'); // Muestra el formulario para añadir fotos
});

// Función para agregar fotos
async function addPhoto(name, url, description, date, albums) {
    const jwt = sessionStorage.getItem('jwt');
    const response = await fetch('/api/photos', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${jwt}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url, description, date, albums })
    });
    if (response.ok) {
        console.log('Foto añadida con éxito');
    } else {
        console.error('Error al añadir foto');
    }
}

// Función para editar fotos
async function editPhoto(id, name, url, description, date, albums) {
    const jwt = sessionStorage.getItem('jwt');
    const response = await fetch(`/api/photos/${id}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${jwt}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url, description, date, albums })
    });
    if (response.ok) {
        console.log('Foto editada con éxito');
    } else {
        console.error('Error al editar foto');
    }
}

// Función para borrar fotos
async function deletePhoto(id) {
    const jwt = sessionStorage.getItem('jwt');
    const response = await fetch(`/api/photos/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${jwt}` }
    });
    if (response.ok) {
        console.log('Foto borrada con éxito');
    } else {
        console.error('Error al borrar foto');
    }
}

