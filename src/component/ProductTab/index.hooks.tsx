import { RouteModel } from "@/model/ProductRouteModel";
import { actions, selectors } from "@/spas/productsSpa/redux-store/slices";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';



export const useProductTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tabNumber = useSelector(selectors.getIndex)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      navigate(RouteModel[newValue as keyof typeof RouteModel]);
    };
    return {handleChange, tabNumber}
}