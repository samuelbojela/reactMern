const express = require('express');

//initialize app variable
const app = express();

app.get('/', (req, res) => res.send('API Running'));

//looks for an environment variable called port if there is no environment variable set, the system defaults to 5000
const PORT = process.env.PORT || 5000;

//console.log the port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
