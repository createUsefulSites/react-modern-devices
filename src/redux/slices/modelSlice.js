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

export const fetchTopModels = createAsyncThunk('model/fetchTopModelsStatus', async () => {
    const { data } = await axios.get(
        'https://65aaa8cb081bd82e1d978003.mockapi.io/Models_info?sortBy=rating=asc&limit=9&page=1',
    );
    return data;
});

export const fetchSameModels = createAsyncThunk('model/fetchSameModelsStatus', async (model) => {
    const { data } = await axios.get(
        `https://65aaa8cb081bd82e1d978003.mockapi.io/Models_info?category=${model}`,
    );
    return data;
});

const initialState = {
    status: 'loading',
    topModelsStatus: 'loading',
    sameModelsStatus: 'loading',
};

export const modelSlice = createSlice({
    name: 'model',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchModels.pending, (state) => {
            localStorage.removeItem('models');
            state.status = 'loading';
        });
        builder.addCase(fetchModels.fulfilled, (state, action) => {
            localStorage.setItem('models', JSON.stringify(action.payload));
            state.status = 'success';
        });
        builder.addCase(fetchModels.rejected, (state) => {
            localStorage.removeItem('models');
            state.status = 'error';
        });

        builder.addCase(fetchTopModels.pending, (state) => {
            localStorage.removeItem('topModels');
            state.topModelsStatus = 'loading';
        });
        builder.addCase(fetchTopModels.fulfilled, (state, action) => {
            localStorage.setItem('topModels', JSON.stringify(action.payload));
            state.topModelsStatus = 'success';
        });
        builder.addCase(fetchTopModels.rejected, (state) => {
            localStorage.localStorage.removeItem('topModels');
            state.topModelsStatus = 'error';
        });

        builder.addCase(fetchSameModels.pending, (state) => {
            localStorage.removeItem('sameModels');
            state.sameModelsStatus = 'loading';
        });
        builder.addCase(fetchSameModels.fulfilled, (state, action) => {
            localStorage.setItem('sameModels', JSON.stringify(action.payload));
            state.sameModelsStatus = 'success';
        });
        builder.addCase(fetchSameModels.rejected, (state) => {
            localStorage.localStorage.removeItem('sameModels');
            state.sameModelsStatus = 'error';
        });
    },
});

export default modelSlice.reducer;
