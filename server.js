const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const taskRoutes = require('./routes/tasks.js');

const PORT = 5000;

server.use(bodyParser.json());

server.use('/tasks', taskRoutes);

server.get('/', (req, res) => res.send('WELCOME TO TASK MANAGER HOMEPAGE'));

server.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));