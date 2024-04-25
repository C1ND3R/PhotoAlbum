//const apiUrl = 'https://tuapi.com/api'; 

// Mostrar formulario de registro
function showRegisterForm() {
    document.getElementById('registerForm').classList.remove('d-none');
}

// Mostrar formulario de login
function showLoginForm() {
    document.getElementById('loginForm').classList.remove('d-none');
}

// Registrarse
async function register(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('jwt', data.token);
        console.log('Registrado exitosamente');
        // Mostrar contenido protegido
        document.getElementById('protectedContent').classList.remove('d-none');
    } else {
        console.error('Error en el registro:', data.message);
    }
}

// Iniciar sesión
async function login(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('jwt', data.token);
        console.log('Inicio de sesión exitoso');
        // Mostrar contenido protegido
        document.getElementById('protectedContent').classList.remove('d-none');
    } else {
        console.error('Error al iniciar sesión:', data.message);
    }
}

document.getElementById('registerForm').addEventListener('submit', register);
document.getElementById('loginForm').addEventListener('submit', login);
