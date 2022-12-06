import List from '../models/listModel.js'

const getList = async (req,res)=>{
    try {
        const lists= List.find()
        res
        .status(200)
        .json({
            status:"200",
            data:lists
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
        
    } catch (error) {
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
    } catch (error) {
        res
        .status(400)
        .json({
            status:"Failed",
            message:err
        })
    }
}