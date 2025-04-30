const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Agregar esta ruta justo antes del module.exports
router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, email, telefono } = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'Usuario no encontrado' 
            });
        }

        user.nombre = nombre;
        user.apellido = apellido;
        user.email = email;
        user.telefono = telefono;
        user.lastActivity = new Date();

        const updatedUser = await user.save();

        res.json({
            success: true,
            data: {
                id: updatedUser._id,
                nombre: updatedUser.nombre,
                apellido: updatedUser.apellido,
                email: updatedUser.email,
                telefono: updatedUser.telefono
            }
        });

    } catch (error) {
        console.error('Error al actualizar:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al actualizar usuario' 
        });
    }
});

module.exports = router;

router.post('/register', async (req, res) => {
    try {
        const { nombre, apellido, email, password, telefono, fechaNacimiento } = req.body;

        // Verificar si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ 
                success: false, 
                message: 'El usuario ya existe' 
            });
        }

        // Crear el usuario
        const user = await User.create({
            nombre,
            apellido,
            email,
            password,
            telefono,
            fechaNacimiento,
            lastActivity: new Date()
        });

        // Generar token
        const token = jwt.sign(
            { userId: user._id },
            'secreto123',
            { expiresIn: '1d' }
        );

        res.status(201).json({
            success: true,
            data: {
                id: user._id,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email,
                telefono: user.telefono,
                token
            }
        });
    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error en el servidor' 
        });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Caso especial para admin
        if (email === "pepe@admin.com" && password === "admin123") {
            const token = jwt.sign(
                { userId: 'admin' },
                'secreto123',
                { expiresIn: '1d' }
            );

            return res.json({
                success: true,
                token,
                user: {
                    id: 'admin',
                    email: email,
                    nombre: "Pepe",
                    apellido: "Admin",
                    isAdmin: true
                }
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Credenciales inválidas' 
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                message: 'Credenciales inválidas' 
            });
        }

        const token = jwt.sign(
            { userId: user._id },
            'secreto123',
            { expiresIn: '1d' }
        );

        return res.json({
            success: true,
            token,
            user: {
                id: user._id,
                email: user.email,
                nombre: user.nombre,
                apellido: user.apellido,
                isAdmin: false
            }
        });

    } catch (error) {
        console.error('Error en login:', error);
        return res.status(500).json({ 
            success: false,
            message: 'Error en el servidor' 
        });
    }
});

// Obtener usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
            .select('-password')
            .sort({ createdAt: -1 });
        
        // Agregar logs para debug
        console.log('Usuarios encontrados:', users.length);
        
        res.json(users);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error al obtener usuarios' 
        });
    }
});

module.exports = router;