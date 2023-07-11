import { MongoClient, Db, MongoClientOptions } from 'mongodb';

const uri = 'mongodb://localhost:27017';
const dbName = 'mercato-persiano';
let persianMarketDb: Db | null = null;

const options: MongoClientOptions = {
    useUnifiedTopology: true
  } as MongoClientOptions;

const client = new MongoClient(uri, options);

export async function connectToDatabase() {
  try {
    await client.connect();
    persianMarketDb = client.db(dbName);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database', error);
    throw error;
  }
}


export function getDB() {
  if (!persianMarketDb) {
    throw new Error('Database not connected');
  }
  return persianMarketDb;
}
