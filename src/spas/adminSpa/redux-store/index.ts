import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducers} from "./slices";
import ajaxRequestSaga from "./slices/ajax/ajax.sagas";


const createRootReducer = () => combineReducers(reducers);
const rootReducer = createRootReducer();
const saga = createSagaMiddleware();

const store = configureStore({
    reducer : rootReducer,
    middleware: [saga]
})

saga.run(ajaxRequestSaga) 

export type RootState = ReturnType<typeof rootReducer>;
export default store;