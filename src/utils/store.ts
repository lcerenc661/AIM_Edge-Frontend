import { configureStore } from "@reduxjs/toolkit";


import  userReducer  from "../features/user/userSlice"
import  cartReducer  from "../features/cart/cartSlice"
import { useDispatch } from "react-redux";



export const store = configureStore({
    reducer: {
        userState: userReducer,
        cartState: cartReducer,
    },
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()