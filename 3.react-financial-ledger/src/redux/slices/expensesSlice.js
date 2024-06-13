import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  setSelectedMonth: parseInt(localStorage.getItem("month"), 10) || 1,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    setSelectedMonth: (state, action) => {
      state.selectedMonth = action.payload;
      localStorage.setItem('month', action.payload.toString());
    },
  },
});

export const { setSelectedMonth } = expensesSlice.actions;


export default expensesSlice.reducer;