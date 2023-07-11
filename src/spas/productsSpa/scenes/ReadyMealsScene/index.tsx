import { Box } from "@mui/material";
import { memo } from "react";
import { useReadyMealsScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";



type ReadyMealsSceneProps = {};

export const ReadyMealsScene = memo(({}: ReadyMealsSceneProps)=>{
    const {} = useReadyMealsScene();

    return (
        <><ProductTab /><h2>readyMeals</h2></>

    )
    
})
