import { createSlice } from "@reduxjs/toolkit";


const errorSlice = createSlice({
    name : 'error',
    initialState : {
        isPageNotFound : false,
        noResultFound : false,
        noResultFoundJSON: {} as any,
    },
    reducers : {
        setError(state){
            state.isPageNotFound = true
        },
        setNoResultFound(state){
            state.noResultFound = true
        },
        removeNoResultFound(state){
            state.noResultFound = false
        },
        removeError(state){
            state.isPageNotFound =  false
        },
        setNotFoundJSON:(state,actions) =>{
            state.noResultFoundJSON = actions.payload;
        }
    }
})

export const { setError , removeError , setNoResultFound, removeNoResultFound, setNotFoundJSON } =  errorSlice.actions;
export const errorReducer = errorSlice.reducer;