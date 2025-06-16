import { Mongoose } from "mongoose";

const schema = Mongoose.Schema({
   name:{
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20
   },
    description:{
          type: String,
          required: true,
          trim: true,
          minLength: 3,
          maxLength: 200
    },
    startDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    endDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    location:{
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 20
    },
    budget:{
        type: Number,
        required: true,
        min: 0
    },
    createdBy:{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }

},{timestamps: true});
export default  Trip = Mongoose.model('trip', schema);