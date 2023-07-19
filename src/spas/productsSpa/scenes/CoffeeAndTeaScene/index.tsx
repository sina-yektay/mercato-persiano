import { Box } from "@mui/material";
import { memo } from "react";
import { useCoffeeAndTeaScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";




type CoffeeAndTeaSceneProps = {};

export const CoffeeAndTeaScene = memo(({}: CoffeeAndTeaSceneProps)=>{
    const {} = useCoffeeAndTeaScene();

    return (
        <><h2>coffee & tea</h2></>

    )
    
})


CoffeeAndTeaScene.displayName = "CoffeeAndTeaScene"