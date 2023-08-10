import { IItem } from "@/model/server/Item";

export interface ItemState {
  list: IItem[];
  searchPopover: boolean;
  productDialog: {
    isDialogOpen: boolean;
    productName: string;
    productId: string;
    price: string;
    quantity: number;
    description: string;
    image: string;
  };
}
