import { getDB } from "@/dbConfig";
import { Collection, ObjectId, WithId } from "mongodb";

const { MongoClient } = require("mongodb");

export type IItem = {
  _id?: ObjectId;
  productName: string;
  productId: string;
  price: string;
  quantity: number;
  isDiscounted?: boolean;
  description: string;
  image: string;
};
export type Iitem = {
  productName: string;
  productId: string;
  price: string;
  quantity: number;
  isDiscounted?: boolean;
  description: string;
  image: string;
};

export class Item {
  _id?: ObjectId;
  productName?: string;
  productId?: string;
  price?: string;
  quantity?: number;
  isDiscounted?: boolean;
  description?: string;
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
      this.isDiscounted = iItem.isDiscounted;
      this.description = iItem.description;
      this.price = iItem.price;
      this.image = iItem.image;
    }
  }

  static async findOne(filter: Partial<IItem>): Promise<Item | null> {
    try {
      const database = getDB();
      const collection: Collection<IItem> = database.collection(
        Item.collectionName
      );
      const document: IItem | null = await collection.findOne(filter);
      if (document) {
        return new Item(document);
      }
      return null;
    } catch (error) {
      console.error("Failed to find article", error);
      throw error;
    }
  }

  static async delete(_id: ObjectId): Promise<void> {
    const database = getDB();
    const collection: Collection<IItem> = database.collection(
      Item.collectionName
    );
    const result = await collection.deleteOne({ _id: _id });
    if (result.deletedCount !== 1) {
      throw new Error("Deleting the product was not applied successfully");
    }
  }

  static async insertMany(documents: Iitem[]) {
    try {
      const database = getDB();
      const collection = database.collection(Item.collectionName);
      const result = await collection.insertMany(documents);
      console.log(`${result.insertedCount} articles inserted`);
    } catch (error) {
      console.error("Failed to insert articles", error);
      throw error;
    }
  }

  static async insertOne(document: Iitem): Promise<Item | null> {
    try {
      const collection: Collection<IItem> = getDB().collection(
        Item.collectionName
      );
      const result: any = await collection.insertOne(document);
      return result;
    } catch (error) {
      console.error("Failed to insert article", error);
      throw error;
    }
  }

  static async findMany(): Promise<Item[]> {
    try {
      const collection: Collection<IItem> = getDB().collection(
        Item.collectionName
      );
      const items: IItem[] = await collection.find({}).toArray();
      return items.map((document) => new Item(document));
    } catch (error) {
      console.error("Failed to find products", error);
      throw error;
    }
  }

  async patch(fields: Partial<Iitem>): Promise<void> {
    const collection: Collection<Item> = getDB().collection(
      Item.collectionName
    );
    const result = await collection.updateOne(
      {
        _id: this._id,
      },
      {
        $set: fields,
      }
    );
    if (result.modifiedCount === 0) {
      throw new Error("Update was not applied successfully");
    }
  }
}
