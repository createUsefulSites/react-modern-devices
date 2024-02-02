import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    additionalTag: '',
    additionalCategory: '',
    indexCheckedCategory: 0,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setAdditionalTag(state, action) {
            action.payload.sortingVariantsForBackend.includes(state.additionalTag)
                ? (state.additionalTag = state.additionalTag.replace(
                      new RegExp(state.additionalTag),
                      action.payload.variant,
                  ))
                : (state.additionalTag += action.payload.variant);
        },
        setAdditionalCategory(state, action) {
            action.payload.allModelsForBackend.includes(state.additionalCategory)
                ? (state.additionalCategory = state.additionalCategory.replace(
                      new RegExp(state.additionalCategory),
                      action.payload.model,
                  ))
                : (state.additionalCategory += action.payload.model);
        },
        setindexCheckedCategory(state, action) {
            state.indexCheckedCategory = action.payload;
        },
        resetAllParametrs(state) {
            state.additionalCategory = '';
            state.additionalTag = '';
        },
    },
});

export const {
    setindexCheckedCategory,
    setAdditionalTag,
    setAdditionalCategory,
    resetAllParametrs,
} = filterSlice.actions;

export default filterSlice.reducer;
