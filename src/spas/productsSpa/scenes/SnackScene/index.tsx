import { Box } from "@mui/material";
import { memo } from "react";
import { useSnackScene } from "./index.hooks";
import { ProductTab } from "@/component/ProductTab";



type SnackSceneProps = {};

export const SnackScene = memo(({}: SnackSceneProps)=>{
    const {} = useSnackScene();

    return (
        <><ProductTab /><h2>snack</h2></>

    )
    
})


SnackScene.displayName = "SnackScene"