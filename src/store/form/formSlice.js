import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    MODULE: 'React Mod7',
    USERNAME: '',
    EMAIL: '',
    PASSWORD: 'mod7USIP-TUNOMBRE', 
  },
  isFormValid: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    clearFormData: (state) => {
      state.username = '';
      state.email = '';
      state.password = '';
  },
  },
});

export const { updateFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;


