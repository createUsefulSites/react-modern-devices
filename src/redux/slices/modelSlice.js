import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchModels = createAsyncThunk(
    'model/fetchModelStatus',
    async ({ inputValueForBack, additionalTag, additionalCategory }) => {
        const { data } = await axios.get(
            `https://65aaa8cb081bd82e1d978003.mockapi.io/Models_info?title=${inputValueForBack}&` +
                additionalTag +
                additionalCategory,
        );
        return data;
    },
);

const initialState = {
    models: [],
    status: 'loading',
};

export const modelSlice = createSlice({
    name: 'model',
    initialState,
    reducers: {
        setModels(state, action) {
            state.models = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchModels.pending, (state) => {
            state.status = 'loading';
            state.models = [];
        });
        builder.addCase(fetchModels.fulfilled, (state, action) => {
            state.models = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchModels.rejected, (state) => {
            state.status = 'error';
            state.models = [];
        });
    },
});

export const { setModels } = modelSlice.actions;

export default modelSlice.reducer;
