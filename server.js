// DEPENDENCIES
const express = require('express');
const PORT = process.env.PORT || 4000;
const cors = require('cors');

// IMPORTS
const projects = require('./projects.json');
const about = require('./about.json');

// APP
const app = express();

// MIDDLEWARE
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/projects', (req, res) => {
    res.send(projects)
})

app.get('/about', (req, res) => {
    res.send(about)
})

app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})