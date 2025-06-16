import { Mongoose } from "mongoose"

const TripRequest = Mongoose.Schema({
    tripId: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'trip',
        required: true
    },
    fromUser: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    toUser: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    status: {
        type: Number,
        enum: [0, 1, 2],
        default:0 // 0: pending, 1: accepted, 2: rejected
    }
}, { timestamps: true });
export default TripRequest = Mongoose.model('tripRequest', TripRequest);