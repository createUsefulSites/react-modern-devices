import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    totalCount: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            const addedItem = state.items.find((model) => model.id === action.payload.id);
            if (addedItem) ++addedItem.count;
            else state.items.push({ ...action.payload, count: 1 });

            state.totalCount = state.totalPrice = state.items.reduce((acc, item) => {
                return item.count + acc;
            }, 0);

            state.totalPrice = state.items.reduce((acc, item) => {
                return item.price * item.count + acc;
            }, 0);
        },
        removeProduct(state, action) {
            let elementIndex;
            state.items.forEach((model, index) => {
                if (model.id === action.payload.id) {
                    elementIndex = index;
                }
            });
            state.totalPrice -= action.payload.count * action.payload.price;
            state.totalCount -= action.payload.count;
            state.items[elementIndex].count -= action.payload.count;
            state.items[elementIndex].count === 0 ? state.items.splice(elementIndex, 1) : null;
        },
        removeAllProducts(state) {
            state.totalPrice = 0;
            state.totalCount = 0;
            state.items = [];
        },
    },
});

export const { addProduct, removeProduct, removeAllProducts } = cartSlice.actions;

export default cartSlice.reducer;
