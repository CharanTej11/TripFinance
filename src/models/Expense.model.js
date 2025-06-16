import { Mongoose } from "mongoose";


const Expense=Mongoose.schema({
    participants:{
        type: [Mongoose.Schema.Types.String],
        required: true, 
        ref: 'user',   
    },
    amount:{
        type: Number,
        required: true,
        min: 0
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    tripId:{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'trip',
        required: true
    }
},{timestamps:true});
export default Expense = Mongoose.model('expense', Expense);  