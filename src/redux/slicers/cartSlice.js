import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartData: [],
        total: 0
    },
    reducers: {
        addToCart(state, action) {
            const badgeSum = state.cartData.reduce((acc, rec, index) => acc + state.cartData[index].quantity * rec.price, 0);
            const index = state.cartData.findIndex(item => item.id === action.payload.id)
            if (index >= 0) {
                state.cartData[index].quantity += 1;
                state.total = badgeSum
            } else {
                return { ...state, cartData: [...state.cartData, { ...action.payload, quantity: 1 }] }
            }
        },
        removeCart(state, action) {
            const indexToRemove = state.cartData.findIndex(item => item.id === action.payload.id)
            if (state.cartData[indexToRemove].quantity > 1) {
                state.cartData[indexToRemove].quantity -= 1;
            } else {
                state.cartData = state.cartData.filter(el => el.id !== action.payload.id)
            }
        },
        removeAllCart(state, action) {
            state.cartData = state.cartData.filter(el => el.id !== action.payload.id)
        }
    }
})

export const { addToCart, removeCart, removeAllCart } = cartSlice.actions
export default cartSlice.reducer


