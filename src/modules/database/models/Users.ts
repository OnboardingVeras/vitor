import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bio: { type: String, required: true },
});

const Users = mongoose.model('Users', UsersSchema);

export default Users;
