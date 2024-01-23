import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    additionalTag: '',
    additionalCategory: '',
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
    },
});

export const { setAdditionalTag, setAdditionalCategory } = filterSlice.actions;

export default filterSlice.reducer;
