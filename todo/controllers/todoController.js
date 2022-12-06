import Todo from '../models/todoModel.js'
import list from '../models/listModel.js'

const getTodo = async (req,res)=>{
    try {
        const Todos= await Todo.find()
        res
        .status(200)
        .json({
            status:"200",
            data:Todos
        })

    } catch (err) {
        res
        .status(400)
        .json({
            status:"Failed",
            message:err
        })
    }
}
const createTodo = async(req,res)=>{
    try {
        const data =   await Todo.create(req.body)
        await list.findByIdAndUpdate(
            req.body.listId,
            {$push:{todos:data._id}},
            { new: true, useFindAndModify: false }
        )
        res
        .status(200)
        .json({
            status:"200",
            data:"Added Successfully"
        })
    } catch (err) {
        res
        .status(400)
        .json({
            status:"Failed",
            message:err
        })
    }
}
const getById = async (req,res)=>{

    try {
        const Todo = Todo.findOne({_id:req.params.id})
        res
        .status(200)
        .json({
            status:"200",
            data:Todo
        })
        
    } catch (err) {
        res
        .status(400)
        .json({
            status:"Failed",
            message:err
        })
    }
}

const updateTodo = async (req,res)=>{
    try {
        const Todo  = await Todo.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res
        .status(200)
        .json({
            status:"200",
            data:Todo
        })
    } catch (err) {
        res
        .status(400)
        .json({
            status:"Failed",
            message:err
        })
    }
}

const deleteTodo = async (req,res)=>{
    try {
        await Todo.findOneAndDelete({_id:req.params.id})
        res
        .status(200)
        .json({
            status:"200",
            data:"Deleted Successfully"
        })
    } catch (err) {
        res
        .status(400)
        .json({
            status:"Failed",
            message:err
        })
    }
}

const TodoController = {
    getById,getTodo,updateTodo,deleteTodo,createTodo
}

export default TodoController