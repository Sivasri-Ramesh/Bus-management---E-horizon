/*
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import signupRoutes from './routes/signup.js';
import User from './models/schema.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Serve static files from the 'public' folder
app.use(express.static('C:/Users/User/Desktop/backend/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/signup', signupRoutes);

app.get('/', (req, res) => {
  res.sendFile("C:/Users/User/Desktop/backend/public/logstu.html");
});

app.post('/signup/signup', async (req, res) => {
  try {
    // Extract user details from request body
    const { name, email, pswd, cnfrm_pswd } = req.body;

    // Check if password and confirm password match
    if (pswd !== cnfrm_pswd) {
      return res.status(400).json({ error: 'Password and confirm password do not match' });
    }

    // Create a new user instance
    const newUser = new User({ name, email, pswd, cnfrm_pswd });

    // Save the user to the database
    await newUser.save();

    // Send student.html file as response
    res.sendFile("C:/Users/User/Desktop/backend/public/student.html");
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
*/

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import signupRoutes from './routes/signup.js';
import User from './models/schema.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/signup', signupRoutes);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'logstu.html'));
});

app.post('/signup/signup', async (req, res) => {
  try {
    // Extract user details from request body
    const { name, email, pswd, cnfrm_pswd } = req.body;

    // Check if password and confirm password match
    if (pswd !== cnfrm_pswd) {
      return res.status(400).json({ error: 'Password and confirm password do not match' });
    }

    // Create a new user instance
    const newUser = new User({ name, email, pswd, cnfrm_pswd });

    // Save the user to the database
    await newUser.save();

    // Send student.html file as response
    res.sendFile(join(__dirname, 'public', 'student.html'));
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
