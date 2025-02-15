import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import productReducer from './features/product/productSlice';
import formReducer from '../store/form/formSlice.js';
import dictionaryReducer from "../Dictionary/dictionarySlice.jsx";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        form: formReducer,
        dictionary: dictionaryReducer
    },
});

export default store;
