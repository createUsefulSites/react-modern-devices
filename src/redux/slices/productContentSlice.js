import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    currentPrice: 0,
    currentMemory: 0,
    title: '',
    simType: '',
};

export const productContentSlice = createSlice({
    name: 'productContent',
    initialState,
    reducers: {
        setInitialState(state, action) {
            state.currentPrice = action.payload.currentPrice;
            state.currentMemory = action.payload.currentMemory;
            state.title = action.payload.title;
            state.simType = action.payload.simType;
        },
        changeCurrentMemory(state, action) {
            state.currentPrice = +action.payload.currentPrice;
            state.title = state.title.replace(
                state.currentMemory.toString(),
                action.payload.currentMemory,
            );
            state.currentMemory = action.payload.currentMemory;

            console.log(current(state));
        },
        changeCurrentSim(state, action) {
            state.title = state.title.replace(state.simType, action.payload);
            state.simType = action.payload;
        },
    },
});

export const { setInitialState, changeCurrentMemory, changeCurrentSim } =
    productContentSlice.actions;

export default productContentSlice.reducer;
