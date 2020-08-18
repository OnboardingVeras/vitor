import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bio: { type: String, required: true },
});

export default UsersSchema;
