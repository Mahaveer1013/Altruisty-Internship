import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: false},
  username: { type: String, required: false},
  password: { type: String, required: false },
  user_type: { type: Number, enum: [1, 2], default: 2 }  // user_type can be 1 (admin) or 2 (user)
});

export const User = mongoose.model('User', userSchema);

const communitySchema = new Schema({
  name: { type: String, required: true },
  uniqueCode: { type: String, unique: true, required: true },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  created_at: { type: Date, default: Date.now }
});

export const Community = mongoose.model('Community', communitySchema);

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['DM', 'COMMUNITY'], required: true },
  community: { type: Schema.Types.ObjectId, ref: 'Community', required: function() { return this.type === 'COMMUNITY'; } }, // Optional, for group messages
  receiver: { type: Schema.Types.ObjectId, ref: 'User', required: function() { return this.type === 'DM'; }  }, // Optional, for direct messages
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const Message = mongoose.model('Message', messageSchema);

