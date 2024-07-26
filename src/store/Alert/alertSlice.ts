import { createSlice } from "@reduxjs/toolkit";
import { AlertActions } from '../../services/uiServices/alert.interface'

const INITIAL_STATE = {
    show: false,
    title: '',
    messages: [''],
    actions: [AlertActions.OK]
};
const alertSlice = createSlice({
    name: 'alert',
    initialState: INITIAL_STATE,
    reducers: {
        showAlert: (state, action) => {
            state.show = true;
            state.title = action?.payload.title;
            state.messages = action?.payload.messages;
            state.actions = action.payload.actions;
        },
        hideAlert: (state) => {
            state.show = false;
        }
    }
})

export const { showAlert, hideAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer