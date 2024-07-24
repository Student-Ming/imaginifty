import { createSlice } from "@reduxjs/toolkit";

const initialState: dialogState = {
    isOpen: false
}

export const loginDialogSlice = createSlice({
    name: 'loginDialog',
    initialState,
    reducers: {
        showModal(state) {
            state.isOpen = !state.isOpen
        }
    }
})

export const { showModal } = loginDialogSlice.actions
export default loginDialogSlice.reducer

export interface dialogState {
    isOpen: boolean
}