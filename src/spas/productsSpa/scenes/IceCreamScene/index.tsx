import { Box } from "@mui/material";
import { memo } from "react";
import { useIceCreamScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";



type IceCreamSceneProps = {};

export const IceCreamScene = memo(({}: IceCreamSceneProps)=>{
    const {} = useIceCreamScene();

    return (
        <><h2>ice cream</h2></>

    )
    
})


IceCreamScene.displayName = "IceCreamScene"