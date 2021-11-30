var express = require('express');
var router = express.Router();

const { fetchTodo } = require("./controller/todoController");
const { createTodo } = require("./controller/todoController");
const { deleteTodo } = require("./controller/todoController");
const { updateTodo } = require("./controller/todoController");

router.get('/',fetchTodo);
router.post('/create-todo',createTodo);
router.delete('/delete-todo-by-id/:id',deleteTodo);
router.put('/update-todo-by-id/:id',updateTodo);


module.exports = router;
