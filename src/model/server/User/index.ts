import { getDB } from "@/dbConfig";
import { Collection, ObjectId } from "mongodb";
import { Session } from "next-auth";
import { Iitem } from "../Item";

export type Iuser = {
  _id?: string;
  email?: string;
  address?: string;
  phone?: string;
  name?: string;
  isAdmin?: boolean;
};

export interface IUserSession extends Session {
  email?: string;
  address?: string;
  phone?: string;
  name?: string;
  isAdmin?: boolean;
}

export type LoginUserParams = {
  email: string;
  password: string;
  address?: string;
  phone?: string;
  name?: string;
  isAdmin?: boolean;
};

export type NewUserParams = {
  email: string;
  password: string;
  address: string;
  phone: string;
  name: string;
  isAdmin: boolean;
};

export type IUser = {
  _id?: ObjectId;
  email: string;
  password: string;
  id?: string;
  address: string;
  phone: string;
  isAdmin: boolean;
  name: string;
  resetToken?: string;
  products?: Iitem[];
};

export class User {
  _id?: ObjectId;
  email?: string;
  password?: string;
  address?: string;
  phone?: string;
  name?: string;
  isAdmin?: boolean;
  resetToken?: string;
  products?: Iitem[];

  static get collectionName() {
    return "user";
  }

  constructor(iUser: IUser) {
    this.fromInterface(iUser);
  }

  fromInterface(iUser: IUser) {
    if (iUser) {
      this._id = iUser._id;
      this.email = iUser.email;
      this.password = iUser.password;
      this.address = iUser.address;
      this.phone = iUser.phone;
      this.name = iUser.name;
      this.isAdmin = iUser.isAdmin;
      this.resetToken = iUser.resetToken || undefined;
      this.products = iUser.products || undefined;
    }
  }

  static async findOne(filter: Partial<IUser>): Promise<User | null> {
    try {
      const database = getDB();
      const collection: Collection<IUser> = database.collection(
        User.collectionName
      );
      const document: IUser | null = await collection.findOne(filter);
      if (document) {
        return new User(document);
      }
      return null;
    } catch (error) {
      console.error("Failed to find the user", error);
      throw error;
    }
  }

  static async insertOne(user: NewUserParams): Promise<User | null> {
    try {
      const collection: Collection<IUser> = getDB().collection(
        User.collectionName
      );
      const result: any = await collection.insertOne(user);
      return result;
    } catch (error) {
      console.error("Failed to insert the user", error);
      throw error;
    }
  }

  async patch(fields: Partial<IUser>): Promise<void> {
    const collection: Collection<IUser> = getDB().collection(
      User.collectionName
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
      throw new Error("Patch op was not applied successfully");
    }
  }

  async addCart(cart: Iitem[]): Promise<void> {
    const collection: Collection<IUser> = getDB().collection(
      User.collectionName
    );
    const result = await collection.updateOne(
      {
        _id: this._id,
      },
      {
        $push: { products: { $each: cart } },
      }
    );
    if (result.modifiedCount !== 1) {
      throw new Error("Patch op was not applied successfully");
    }
  }
}
