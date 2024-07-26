import { createSlice } from "@reduxjs/toolkit";


const mainDataSlice = createSlice({
    name: 'mainData',
    initialState: {
        mainData: {} as any,
        reviewData: {} as any,
        travellerCategory: {} as any,
        policyUser: {} as any,
        cookieUser: "",
        configData: {} as any,
        confirmationData: {} as any
    },
    reducers: {
        setMainData(state, action) {
            state.mainData = action.payload;
        },
        setToken(state, action) {
            state.cookieUser = action.payload;
        }
    }
})

export const {
    setMainData,
    setToken
} = mainDataSlice.actions;
export const mainDataReducer = mainDataSlice.reducer;
