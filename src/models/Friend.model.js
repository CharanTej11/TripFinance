import { Mongoose } from "mongoose"; 
const Friend = Mongoose.Schema({
    userId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    friendId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: Number,
        enum: [0, 1], // 0: pending, 1: accepted
        default: 0
    }
}, { timestamps: true });