import mongoose from 'mongoose';

class Database {
  private static mongodb = mongoose;

  private static MONGO_HOST = process.env.MONGO_HOST || '127.0.0.1';

  private static MONGO_PORT = process.env.MONGO_PORT || '27017';

  private static uri = `mongodb://${Database.MONGO_HOST}:${Database.MONGO_PORT}/local`;

  private constructor() {}

  public static async setConnection(): Promise<void> {
    await this.connect();
    await this.dropDatabase();
  }

  private static async connect(config =
  { useNewUrlParser: true, useUnifiedTopology: true }): Promise<void> {
    try {
      await this.mongodb.connect(this.uri, config);
      console.log(`Successfully connected to mongodb on port: ${Database.MONGO_PORT} @ http://localhost:${Database.MONGO_PORT}`);
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
