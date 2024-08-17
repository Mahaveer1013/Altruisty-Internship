import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  address: { type: String, required: false},
  country: { type: String, required: false},
  city: { type: String, required: false},
  countryCode: { type: Number, required: false},
})

const collegeSchema = new Schema({
  college: { type: String, required: false},
  graduatingYear: { type: Number, required: false},
  department: { type: String, required: false},
  year: { type: Number, required: false, enum:[1,2,3,4,5]},
})

const socialSchema = new Schema({
  linkedIn: { type: String, required: false}, 
  github: { type: String, required: false},
})

const userSchema = new Schema({
  email: { type: String, required: false},
  username: { type: String, required: false},
  password: { type: String, required: false },
  user_type: { type: Number, enum: [1, 2], default: 2 },  // user_type can be 1 (admin) or 2 (user)
  name: { type: String, required: false},
  phoneNumber: { type: Number, required: false},
  domain: { type: String, required: false},
  hiringReason: { type: String, required: false},
  skills: { type: String, required: false},
  resume: { type: String, required: false}, //upload to firebase storage and provide link here
  followers : [{ type: Schema.Types.ObjectId, ref: 'User' }],
  following : [{ type: Schema.Types.ObjectId, ref: 'User' }],
  address: addressSchema,
  college: collegeSchema,
  social: socialSchema,
});

const User = mongoose.model('User', userSchema);

export default User
