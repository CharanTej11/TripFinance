import { Mongoose } from "mongoose";

const schema = Mongoose.Schema({
    tripId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'trip',
        required: true
    },
   paidTo: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    paidFrom: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    
}, { timestamps: true });
export default Expense = Mongoose.model('expense', schema);

