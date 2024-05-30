import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import fakeData from "../../pages/FakeData";

const initialState = {
  allItems: JSON.parse(localStorage.getItem("allItems")) || fakeData,
  activeMonth: localStorage.getItem("activeMonth") || "1월",
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setActiveMonth: (state, action) => {
      state.activeMonth = action.payload;
      localStorage.setItem("activeMonth", action.payload);
    },
    addExpense: (state, action) => {
      const newItem = {
        id: uuidv4(),
        ...action.payload,
      };
      state.allItems.push(newItem);
      localStorage.setItem("allItems", JSON.stringify(state.allItems));
    },
    editExpense: (state, action) => {
      const index = state.allItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.allItems[index] = action.payload;
        localStorage.setItem("allItems", JSON.stringify(state.allItems));
      }
    },
    deleteExpense: (state, action) => {
      state.allItems = state.allItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("allItems", JSON.stringify(state.allItems));
    },
  },
});

export const { setActiveMonth, addExpense, editExpense, deleteExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
