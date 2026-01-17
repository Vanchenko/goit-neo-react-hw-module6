import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    searchName: '',
  },
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        searchName: action.payload,
      };
    },
  },
});

export const { setFilter } = slice.actions;

export default slice.reducer;
