import { MongoClient, Db, MongoClientOptions } from "mongodb";
import { getParameterFromSSM } from "./helper";

// const uri = 'mongodb://localhost:27017';
// const uri = process.env.NEXT_PUBLIC_MONGODB_URI || "";
var uri: string;
let persianMarketDb: Db | null = null;
const initializeDatabaseConnection = async () => {
  try {
    uri = await getParameterFromSSM("TORINASIA_MONGODB_URI");
  } catch (error) {}
};

const dbName = "torinasia";

const options: MongoClientOptions = {
  useUnifiedTopology: true,
} as MongoClientOptions;

export async function connectToDatabase() {
  try {
    await initializeDatabaseConnection();
    const client = new MongoClient(uri, options);
    await client.connect();
    persianMarketDb = client.db(dbName);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database", error);
    throw error;
  }
}

export function getDB() {
  if (!persianMarketDb) {
    throw new Error("Database not connected");
  }
  return persianMarketDb;
}
