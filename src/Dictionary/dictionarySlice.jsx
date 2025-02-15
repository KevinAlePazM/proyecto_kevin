import { createSlice } from "@reduxjs/toolkit";

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: {
    words: [],
  },
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload); 
    },
    deleteWord: (state, action) => {
      const wordIndex = state.words.findIndex(
        (entry) =>
          entry.spanish === action.payload.spanish ||
          entry.english === action.payload.english ||
          entry.portuguese === action.payload.portuguese
      );
      if (wordIndex !== -1) {
        state.words.splice(wordIndex, 1); 
      }
    },
  },
});

export const { addWord, deleteWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;


