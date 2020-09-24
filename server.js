const express = require('express');
const connectDB = require('./config/db');

//initialize app variable
const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Defined routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//looks for an environment variable called port if there is no environment variable set, the system defaults to 5000
const PORT = process.env.PORT || 5000;

//console.log the port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
