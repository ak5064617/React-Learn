import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({   // cart slice is a object type here we are passing configuration
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {   // reducer is a object which contains function which update/modify the state
        addItem: (state, action) =>{
            state.items.push(action.payload)
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state)=> {
            state.items.length = 0;
        }

    },
    

});

export const {addItem,removeItem,clearCart} = CartSlice.actions;

export default CartSlice.reducer;