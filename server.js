// server.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');  // Requiere el módulo path para acceder a los archivos estáticos

const app = express();
const port = 3000;

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de ejemplo',
      description: 'API RESTful simple',
      version: '1.0.0',
    },
  },
  apis: ['./server.js'], // Ruta del archivo donde estarán los comentarios Swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware para Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Servir archivos estáticos (HTML, CSS, JS) desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Endpoints de la API
/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Retorna un saludo.
 *     responses:
 *       200:
 *         description: Saludo exitoso
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
app.get('/api/hello', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
