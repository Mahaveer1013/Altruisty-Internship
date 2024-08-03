import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: false},
  username: { type: String, required: false},
  password: { type: String, required: false },
  user_type: { type: Number, enum: [1, 2], default: 2 }  // user_type can be 1 (admin) or 2 (user)
});

export const User = mongoose.model('users', userSchema);

const communitySchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: false }
})
