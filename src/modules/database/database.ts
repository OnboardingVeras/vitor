import mongoose from 'mongoose';

class Database {
  private static instace: Database | null = null;

  private mongodb = mongoose;

  private uri = 'mongodb://127.0.0.1:27017/local';

  private constructor() {
    this.dropDatabase();
    this.connect();
  }

  public static getInstance(): Database {
    if (Database.instace === null) Database.instace = new Database();

    return Database.instace;
  }

  private async connect(config =
  { useNewUrlParser: true, useUnifiedTopology: true }): Promise<void> {
    try {
      await this.mongodb.connect(this.uri, config);
      console.log('Successfully connected to mongodb');
    } catch (error) {
      console.error(error.message);
    }
  }

  private async dropDatabase() : Promise<void> {
    await this.mongodb.connection.dropDatabase();
  }

  public async closeConnection() : Promise<void> {
    console.log('Disconnected to mongodb');
    await this.mongodb.connection.close();
  }
}

export default Database;
