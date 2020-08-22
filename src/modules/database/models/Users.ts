import Database from '../database';
import UsersSchema from '../shcemas/Users';

const database = Database.getInstance();
const db = database.db();

const Users = db.model('Users', UsersSchema);

export default Users;
