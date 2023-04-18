import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
 
};

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        // Actions.
        addToBasket:(state, action)=>{
            state.items = [...state.items, action.payload];
        },
        removeFromBasket:(state,action)=>{
            const index = state.items.findIndex(item=>item._id === action.payload._id)
            const newBasket = [...state.items]
            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.warn(`cannot delete ${action.payload._id}. It does not exit`)
            }
            state.items = newBasket
        },
        deleteBasket:(state,action)=>{
            state.items = []
        }
    }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions
// How we pull information from the Global state
export const selectItems = (state) => state.basket.items

export default basketSlice.reducer