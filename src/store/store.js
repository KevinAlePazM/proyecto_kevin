import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import productReducer from './features/product/productSlice';
import formReducer from '../store/form/formSlice.js';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
        form: formReducer
    },
});

export default store;
