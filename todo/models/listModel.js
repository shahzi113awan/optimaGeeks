import mongoose, { mongo, Schema }  from "mongoose";

const listSchema  = mongoose.Schema({
    name:{
        type:String
    },
    
    todos:[{
        type:Schema.Types.ObjectId,
        ref:"Todo"
    }]


})

const list  = mongoose.model("List",listSchema)
export default list