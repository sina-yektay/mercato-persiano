import { IItem } from "@/model/server/Item";
import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setAnchorEl(e.target);
  };
  const products = useSelector(selectors.products);
  const dispatch = useDispatch();
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, products]);

  const open = Boolean(anchorEl) && filteredProducts.length > 0;
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item: IItem) => {
    setAnchorEl(null);
    dispatch(actions.changeSearchPopover({ searchPopoverState: false }));
    dispatch(
      actions.changeDialogState({
        productDialog: {
          isDialogOpen: true,
          productName: item.productName,
          productId: item.productId,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          description: item.description,
        },
      })
    );
  };

  return {
    searchQuery,
    handleSearchChange,
    filteredProducts,
    open,
    anchorEl,
    handleClose,
    handleItemClick,
  };
};
