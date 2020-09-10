import mongoose from 'mongoose';

class Database {
  private static singleton: Database | null = null;

  private static mongodb = mongoose;

  private static uri = 'mongodb://127.0.0.1:27017/local';

  private constructor() {}

  public static async getSingleton(): Promise<Database> {
    if (Database.singleton === null) { Database.singleton = new Database(); }

    await this.connect();
    await this.dropDatabase();

    return Database.singleton;
  }

  private static async connect(config =
  { useNewUrlParser: true, useUnifiedTopology: true }): Promise<void> {
    try {
      await this.mongodb.connect(this.uri, config);
      console.log('Successfully connected to mongodb');
    } catch (error) {
      console.error(error.message);
    }
  }

  private static async dropDatabase() : Promise<void> {
    try {
      await this.mongodb.connection.dropDatabase();
    } catch (error) {
      console.error(error.message);
    }
  }

  public static async closeConnection() : Promise<void> {
    try {
      await this.mongodb.connection.close();
      console.log('Disconnected to mongodb');
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default Database;
