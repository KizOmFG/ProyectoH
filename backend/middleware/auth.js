const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Middleware de protección
const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            
            // Actualizar última actividad con la fecha actual
            if (req.user) {
                req.user.lastActivity = new Date();
                await req.user.save();
            }
            
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'No autorizado' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'No autorizado, no hay token' });
    }
};

// Ruta de registro
router.post('/register', async (req, res) => {
    try {
        const { nombre, apellido, email, password, telefono, fechaNacimiento } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const user = await User.create({
            nombre,
            apellido,
            email,
            password,
            telefono,
            fechaNacimiento,
            lastActivity: new Date()
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email,
                telefono: user.telefono,
                token: generateToken(user._id)
            });
        }
    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            // Actualizar última actividad
            user.lastActivity = new Date();
            await user.save();

            res.json({
                _id: user._id,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email,
                telefono: user.telefono,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Email o contraseña incorrectos' });
        }
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

// Obtener todos los usuarios
router.get('/users', protect, async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
});

// Eliminar usuario
router.delete('/users/:id', protect, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        await user.deleteOne();
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ message: 'Error al eliminar usuario' });
    }
});

// Actualizar usuario
router.put('/users/:id', protect, async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, email, telefono } = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Actualizar los campos
        user.nombre = nombre;
        user.apellido = apellido;
        user.email = email;
        user.telefono = telefono;
        user.lastActivity = new Date();

        const updatedUser = await user.save();

        res.json({
            success: true,
            data: {
                _id: updatedUser._id,
                nombre: updatedUser.nombre,
                apellido: updatedUser.apellido,
                email: updatedUser.email,
                telefono: updatedUser.telefono
            }
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al actualizar usuario' 
        });
    }
});

// Nueva ruta para estadísticas
router.get('/stats', protect, async (req, res) => {
    try {
        const users = await User.find({});
        const estadisticas = {
            totalUsuarios: users.length,
            usuariosConectados: users.filter(user => {
                const ultimaActividad = new Date(user.lastActivity || user.createdAt);
                const hace24Horas = new Date(Date.now() - 24 * 60 * 60 * 1000);
                return ultimaActividad > hace24Horas;
            }).length,
            pedidosPendientes: 0 // Por ahora lo dejamos en 0 hasta implementar pedidos
        };
        
        res.json({
            success: true,
            data: estadisticas
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al obtener estadísticas' 
        });
    }
});

// Función para generar el token JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

module.exports = router;