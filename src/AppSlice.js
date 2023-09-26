import { createSlice } from '@reduxjs/toolkit';
import { darkTheme } from './themes';

const initialState = {
    theme: darkTheme
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload
        },
    }
})

export const { toggleTheme } = appSlice.actions;
export const selectTheme = (state) => state.app.theme

export default appSlice.reducer;