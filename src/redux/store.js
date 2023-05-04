import { configureStore} from "@reduxjs/toolkit";
import basketReducer from '../slice/basketSlice';
import payReducer from '../slice/paySlice'
import orderReducer from '../slice/orderSlice'

export const store = configureStore({
  reducer:{
    basket:basketReducer,
    pay:payReducer,
    order:orderReducer
  }
})


