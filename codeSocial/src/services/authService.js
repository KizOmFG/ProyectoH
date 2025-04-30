// src/services/authService.js
const API_URL = 'http://localhost:5000/api/auth';

/*
Rutas disponibles en la API:
- GET  http://localhost:5000/api/auth/users        → Para obtener la lista de usuarios
*/

const authService = {
    async register(userData) {
        try {
            console.log('Enviando datos al servidor:', userData); // Para debug
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            console.log('Respuesta del servidor:', data); // Para debug

            if (!response.ok) {
                throw new Error(data.message || 'Error en el registro');
            }

            return { success: true, data };
        } catch (error) {
            console.error('Error en el registro:', error);
            return { success: false, message: error.message };
        }
    },

    async login(credentials) {
        try {
            console.log('Enviando credenciales:', credentials); // Log para depuración
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
    
            const data = await response.json();
            console.log('Respuesta del servidor:', data); // Log para depuración
    
            if (!data.success) {
                throw new Error(data.message || 'Error en el inicio de sesión');
            }
    
            if (data.token) {
                const userData = {
                    id: data.user.id,
                    email: data.user.email,
                    nombre: data.user.nombre,
                    apellido: data.user.apellido,
                    isAdmin: data.user.isAdmin
                };
                localStorage.setItem('userToken', data.token);
                localStorage.setItem('currentUser', JSON.stringify(userData));
            }
    
            return { success: true, data };
        } catch (error) {
            console.error('Error en login:', error);
            return { success: false, message: error.message };
        }
    },
    logout() {
        localStorage.removeItem('userToken');
        localStorage.removeItem('currentUser');
    },

    getCurrentUser() {
        const userData = localStorage.getItem('currentUser');
        return userData ? JSON.parse(userData) : null;
    },

    getToken() {
        return localStorage.getItem('userToken');
    },

    isAuthenticated() {
        return !!this.getToken();
    }
};

export default authService;