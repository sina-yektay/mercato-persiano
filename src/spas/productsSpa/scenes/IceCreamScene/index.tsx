import { Box } from "@mui/material";
import { memo } from "react";
import { useIceCreamScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";
import { ProductPagination } from "@/component/ProductPagination";



type IceCreamSceneProps = {};

export const IceCreamScene = memo(({}: IceCreamSceneProps)=>{
    const {} = useIceCreamScene();

    return <ProductPagination productType="icecreams" />;
    
})


IceCreamScene.displayName = "IceCreamScene"