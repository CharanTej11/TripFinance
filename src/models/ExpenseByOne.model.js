import { Mongoose } from "mongoose";



const ExpenseByOne = Mongoose.Schema({
    paidBy: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    expenseId: {
        type: Mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'expense',
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },

}, { timestamps: true });
export default ExpenseByOne = Mongoose.model('expenseByOne', ExpenseByOne);
