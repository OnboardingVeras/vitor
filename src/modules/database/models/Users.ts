import mongoose from 'mongoose';
import Database from '../database';

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bio: { type: String, required: true },
});

const database = Database.getInstance();

const Users = database.createModel('Users', UsersSchema);

export default Users;
