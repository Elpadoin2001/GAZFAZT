import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';

/**
 * Centraliza todas las rutas de la aplicación
 * Cada ruta se registra con su prefijo correspondiente
 */
export const registerRoutes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  
  // Puedes agregar más rutas aquí conforme crezca tu app
  // Ejemplo:
  // app.use('/api/products', productRoutes);
  // app.use('/api/transactions', transactionRoutes);
};

export default registerRoutes;
