// albums.js
document.getElementById('createAlbum').addEventListener('click', () => {
    document.getElementById('albumForm').classList.remove('d-none'); // Muestra el formulario para crear álbumes
});

// Función para crear álbumes
async function createAlbum(name, description) {
    const jwt = sessionStorage.getItem('jwt');
    const response = await fetch('/api/albums', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${jwt}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
    });
    if (response.ok) {
        console.log('Álbum creado con éxito');
    } else {
        console.error('Error al crear álbum');
    }
}

// Función para editar álbumes
async function editAlbum(id, name, description) {
    const jwt = sessionStorage.getItem('jwt');
    const response = await fetch(`/api/albums/${id}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${jwt}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
    });
    if (response.ok) {
        console.log('Álbum editado con éxito');
    } else {
        console.error('Error al editar álbum');
    }
}

// Función para borrar álbumes
async function deleteAlbum(id) {
    const jwt = sessionStorage.getItem('jwt');
    const response = await fetch(`/api/albums/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${jwt}` }
    });
    if (response.ok) {
        console.log('Álbum borrado con éxito');
    } else {
        console.error('Error al borrar álbum');
    }
}

// Funciones para manejar fotos dentro de álbumes
async function addPhotoToAlbum(albumId, photoId) {
    const jwt = sessionStorage.getItem('jwt');
    const response = await fetch(`/api/albums/${albumId}/photos`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${jwt}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ photoId })
    });
    if (response.ok) {
        console.log('Foto añadida al álbum con éxito');
    } else {
        console.error('Error al añadir foto al álbum');
    }
}

async function removePhotoFromAlbum(albumId, photoId) {
    const jwt = sessionStorage.getItem('jwt');
    const response = await fetch(`/api/albums/${albumId}/photos/${photoId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${jwt}` }
    });
    if (response.ok) {
        console.log('Foto eliminada del álbum con éxito');
    } else {
        console.error('Error al eliminar foto del álbum');
    }
}
