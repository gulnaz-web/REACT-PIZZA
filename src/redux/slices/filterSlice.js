import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   categoryId: 0,
   sortType: {
      value: 'популярности',
      sortProperty: 'rating',
   },
};

const filterSlice = createSlice({
   name: 'filters',
   initialState,
   reducers: {
      handleCategory: (state, action) => {
         state.categoryId = action.payload;
      },
      handleSort: (state, action) => {
         state.sortType = action.payload;
      },
      hadleFilters: (state, action) => {
         state.categoryId = Number(action.payload.categoryId);
         state.sortType = action.payload.sort;
      },
   },
});

export const { handleCategory, handleSort, hadleFilters } = filterSlice.actions;
export default filterSlice.reducer;
