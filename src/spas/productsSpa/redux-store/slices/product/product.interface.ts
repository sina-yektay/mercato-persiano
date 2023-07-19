import { IItem } from "@/model/server/Item";

export interface ItemState {
  list: IItem[];
  productDialog: {
    isDialogOpen: boolean;
    productName: string;
    productId: string;
    price: string;
    quantity: number;
    image: string;
  };
}
