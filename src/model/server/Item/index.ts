
import { getDB } from "@/dbConfig";
import { Collection,ObjectId, WithId } from "mongodb";


const { MongoClient } = require('mongodb');

export type IItem = {
    _id?: ObjectId;
    productName: string;
    productId: string;
    price: string;
    quantity: number;
    image: string;
}
export type Iitem = {
    productName: string;
    productId: string;
    price: string;
    quantity: number;
    image: string;
}

export class Item {
    _id?: ObjectId;
    productName?: string;
    productId?: string;
    price?: string;
    quantity?: number;
    image?: string;

    static get collectionName() {
        return "item";
      }


      constructor(iItem: IItem) {
        this.fromInterface(iItem);
      }
    
      fromInterface(iItem: IItem) {
        if (iItem) {
          this._id = iItem._id;
          this.productName = iItem.productName;
          this.productId = iItem.productId;
          this.quantity = iItem.quantity;
          this.price = iItem.price;
          this.image = iItem.image;
        }
      }





      static async findOne(filter: Partial<IItem>): Promise<Item | null> {
        try {
          const database = getDB();
          const collection: Collection<IItem> = database.collection(Item.collectionName);
          const document: IItem | null = await collection.findOne(filter);
          if (document) {
            console.log(document)
            return new Item(document);
          }
          return null;
        } catch (error) {
          console.error('Failed to find article', error);
          throw error;
        }
      }

      static async insertMany(documents: Iitem[]) {
        try {
          const database = getDB();
          const collection = database.collection(Item.collectionName);
          const result = await collection.insertMany(documents);
          console.log(`${result.insertedCount} articles inserted`);
        } catch (error) {
          console.error('Failed to insert articles', error);
          throw error;
        }
      }

      static async insertOne(document: Iitem): Promise<Item | null> {
        try {
          const collection: Collection<IItem> = getDB().collection(Item.collectionName);
          const result: any= await collection.insertOne(document);
          return result;
        } catch (error) {
          console.error('Failed to insert article', error);
          throw error;
        }
      }

      static async findMany(): Promise<Item[]> {
        try {
          const collection: Collection<IItem>  = getDB().collection(Item.collectionName);
          const articles: IItem[] = await collection.find({}).toArray();
          return articles.map((document) => new Item(document));
        } catch (error) {
          console.error('Failed to find articles', error);
          throw error;
        }
      }
    }

