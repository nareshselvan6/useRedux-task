import { configureStore } from "@reduxjs/toolkit";
import operationreducer from "./OperationSlice";


export const store=configureStore({
    reducer:{
       productstate:operationreducer
    }
})
