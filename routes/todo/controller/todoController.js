const Todo = require("../model/Todo");

async function fetchTodo(req,res){

    try{
        let payload = await Todo.find(req.body);
        res.json({message: "success", payload: payload});
    }catch(error){
        res.status(500).json({message: "failure", error: error.message});
    }
}

const createTodo = async (req,res) =>{
    try{
        const newTodo = new Todo({
            todo: req.body.todo,
            isDone: req.body.isDone,
        });

        let payload = await newTodo.save();
        res.json({message: 'success', payload});
    }catch(error){
        res.status(500).json({message: "Could not be created", error: error.message});
    };
};

const updateTodo = async (req,res) =>{
    try{
        const { id } = req.params;
        let payload = await Todo.findByIdAndUpdate(id,req.body,{new:true});
        res.json({message: "success", payload});
    }catch(error){
        res.status(500).json({message: "Not Updated", message: error.message});
    }
};

async function deleteTodo (req, res){
    try{
        const { id } = req.params;
        let payload = await Todo.findByIdAndDelete(id);
        res.json({message: "success", payload});
    }catch(error){
        res.status(500).json({message: "Not Deleted", error: error.message});
    }
}

module.exports = {
    fetchTodo,
    createTodo,
    updateTodo,
    deleteTodo
};