const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Mock database
tasks = [];

// Getting the list of tasks from the mock database
router.get('/', (req, res) => {
    res.send(tasks);
})

router.post('/', (req, res) => {
    const task = req.body;

    tasks.push({ ...task, id: uuidv4() });

    res.send(`${task.title} task has been added to the Database`);
}) 

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundTask = tasks.find((task) => task.id === id)

    res.send(foundTask)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
            break;
        }
    }

    res.send(`${id} deleted successfully from database`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
  
    const { title, description, status} = req.body;
  
    const task = tasks.find((task) => task.id === id)
  
    if(title) task.title = title;
    if(description) task.description = description;
    if(status) task.status = status;
  
    res.send(`task ${id} has been updated`)
    
  });

module.exports = router;