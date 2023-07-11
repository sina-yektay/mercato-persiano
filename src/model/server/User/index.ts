import { getDB } from "@/dbConfig";
import { Collection, ObjectId } from "mongodb";
import { Session } from "next-auth";


export type Iuser = {
    _id: string;
    email: string;
  };

  export interface IUserSession extends Session {
    user: {
      email: string;
      password: string;
    };
  }

export type LoginUserParams = {
    email: string,
    password: string
}

export type IUser = {
    _id: ObjectId;
    email: string;
    password: string;
    id?: string;
}


export class User {
    _id?: ObjectId;
    email?: string;
    password?: string;

    static get collectionName(){
        return "admin"
    }

    constructor(iUser: IUser) {
        this.fromInterface(iUser);
      }
    
      fromInterface(iUser: IUser) {
        if (iUser) {
          this._id = iUser._id;
          this.email = iUser.email;
          this.password = iUser.password;
                }
      }


      static async findOne(filter: Partial<IUser>): Promise<User | null> {
        try {
          const database = getDB();
          const collection: Collection<IUser> = database.collection(User.collectionName);
          const document: IUser | null = await collection.findOne(filter);
          if (document) {
            console.log(document)
            return new User(document);
          }
          return null;
        } catch (error) {
          console.error('Failed to find the user', error);
          throw error;
        }
      }
}

