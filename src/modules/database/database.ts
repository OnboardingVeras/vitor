/* eslint-disable no-console */
import mongoose from 'mongoose';
import UsersSchema from './shcemas/Users';

class Database {
  private uri = 'mongodb://127.0.0.1:27017/local';

  private Users = mongoose.model('Users', UsersSchema);

  public async connect() : Promise<void> {
    await mongoose.connect(this.uri, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Successfully connected to mongodb');
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public async dropDatabase() : Promise<void> {
    await mongoose.connection.dropDatabase();
  }

  // eslint-disable-next-line class-methods-use-this
  public async closeConnection() : Promise<void> {
    await mongoose.connection.close();
  }

  public async createUser(user: { name: string, age: number, bio: string}) : Promise<void> {
    await this.Users.create(user);
  }

  public async getAllUsers(): Promise<mongoose.DocumentQuery<mongoose.Document[], mongoose.Document,
                                      Record<string, unknown>>> {
    return this.Users.find();
  }
}

export default Database;
