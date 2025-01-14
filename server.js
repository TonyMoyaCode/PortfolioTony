require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);

// Configura la API Key de SendGrid desde variables de entorno
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));  // <-- Aquí

// Ruta para manejar el envío del formulario
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Validación de datos
  if (!name || !email || !message) {
    return res.status(400).send('Todos los campos son obligatorios.');
  }

  const msg = {
    to: 'tonymoya89@gmail.com', // Reemplaza con tu correo
    from: 'tonymoya89@gmail.com', // Un correo autorizado en SendGrid
    subject: `Nuevo mensaje de ${name}`,
    text: `Has recibido un nuevo mensaje:\n\nNombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  try {
    // Intentar enviar el correo a través de SendGrid
    await sgMail.send(msg);
    console.log('Correo enviado con éxito');
    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error.response ? error.response.body : error);
    res.status(500).send('Error al enviar el correo');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.post('/send-email', async (req, res) => {
  console.log('Datos recibidos:', req.body);
  
});
