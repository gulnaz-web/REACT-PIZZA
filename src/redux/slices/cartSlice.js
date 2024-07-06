import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   totalPrice: 0,
   totalCount: 0,
   items: [],
};

const changeTotal = (state) => {
   state.totalCount = state.items?.reduce((sum, obj) => {
      return obj.count + sum;
   }, 0);
   state.totalPrice = state.items?.reduce((sum, obj) => {
      return obj.price * obj.count + sum;
   }, 0);
};

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addItem: (state, action) => {
         const findItem = state.items?.find((item) => item.id === action.payload.id);

         if (findItem) {
            findItem.count++;
         } else {
            state.items.push({ ...action.payload, count: 1 });
         }
         changeTotal(state);
      },
      plusItem: (state, action) => {
         const findItem = state.items?.find((item) => item.id === action.payload);

         if (findItem) findItem.count++;
         changeTotal(state);
      },
      minusItem: (state, action) => {
         const findItem = state.items?.find((item) => item.id === action.payload);

         if (findItem) findItem.count--;
         changeTotal(state);
      },
      removeItem: (state, action) => {
         if (window.confirm('Вы действительно хотите удалить товар?')) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            changeTotal(state);
         }
      },
      clearItems: (state) => {
         if (window.confirm('Вы действительно хотите удалить все товары?')) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
         }
      },
   },
});

export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions;
export default cartSlice.reducer;
