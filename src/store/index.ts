import codeBaseSlice from "@/store/slices/codeBaseSlice";
import { configureStore } from "@reduxjs/toolkit";

const makeStore = configureStore({
    reducer: {
        codeBase: codeBaseSlice
    }
})

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore | any>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default makeStore