import List from '../models/listModel.js'

const getList = async (req,res)=>{
    try {
        const lists= await List.find().populate("todos")
        // console.log(lists)
        res
        .status(200)
        .json({
            status:"200",
            data:lists
        })

    } catch (err) {
        console.log(err)
        res
        .status(400)
        .json({
            status:"Failed",
            message:err
        })
    }
}
const createList = async(req,res)=>{
    try {
        await List.create(req.body)
        res
        .status(200)
        .json({
            status:"200",
            data:"Added Successfully"
        })
    } catch (error) {
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
        const list = List.findOne({_id:req.params.id})
        res
        .status(200)
        .json({
            status:"200",
            data:list
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

const updateList = async (req,res)=>{
    try {
        const list  = await List.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res
        .status(200)
        .json({
            status:"200",
            data:list
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

const deleteList = async (req,res)=>{
    try {
        await List.findOneAndDelete({_id:req.params.id})
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

const listController = {
    getById,getList,updateList,deleteList,createList
}

export default listController