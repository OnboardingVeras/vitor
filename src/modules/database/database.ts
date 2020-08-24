/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import mongoose from 'mongoose';

class Database {
  private static instace: Database | null = null;

  public mongodb = mongoose;

  private uri = 'mongodb://127.0.0.1:27017/local';

  private constructor() {}

  public static getInstance(): Database {
    if (Database.instace === null) Database.instace = new Database();

    return Database.instace;
  }

  public async connect(config =
  { useNewUrlParser: true, useUnifiedTopology: true }): Promise<void> {
    try {
      await this.mongodb.connect(this.uri, config);
      console.log('Successfully connected to mongodb');
    } catch (error) {
      console.error(error.message);
    }
  }

  public async dropDatabase() : Promise<void> {
    await this.mongodb.connection.dropDatabase();
  }

  public async closeConnection() : Promise<void> {
    console.log('Disconnected to mongodb');
    await this.mongodb.connection.close();
  }
}

export default Database;
