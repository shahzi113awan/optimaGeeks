import mongoose, { mongo, Schema }  from "mongoose";

const todoSchema  = mongoose.Schema({
    title:{
        type:String
    },
    marked:{
        type:Boolean
    },
    dueDate:{
        type:Date
    },
    listId:{
        type:Schema.Types.ObjectId,
        ref:"List"
    }


})

module.exports  = mongoose.model("Todo",todoSchema)