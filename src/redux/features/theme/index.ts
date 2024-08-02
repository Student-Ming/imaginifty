import { createSlice } from "@reduxjs/toolkit";

const initialState: themeState = {
    type: 'light',
    isSelected: false,
    tip: 'Switch to dark theme',
    color: 'default'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeType(state) {
            if (state.type === 'light') {
                state.type = 'dark'
                state.isSelected = true
                state.tip = 'Switch to light theme'
                state.color = 'secondary'
            } else {
                state.type = 'light'
                state.isSelected = false
                state.tip = 'Switch to dark theme'
                state.color = 'default'
            }
        }
    }
})

export const { changeType } = themeSlice.actions
export default themeSlice.reducer

export interface themeState {
    type: string,
    isSelected: boolean,
    tip: string,
    color: 'default' | 'secondary'
}