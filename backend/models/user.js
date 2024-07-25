import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  user_type: { type: Number, enum: [1, 2], default: 2 }  // user_type can be 1 or 2
});

const User = mongoose.model('users', userSchema);

export {User}

