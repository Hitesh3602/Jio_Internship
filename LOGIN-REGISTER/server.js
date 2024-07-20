const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const authRoutes = require('./routers/authRouter');

dotenv.config();

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
