import { createSlice } from "@reduxjs/toolkit";

const travellerDataSlice = createSlice({
    name: 'travellerData',
    initialState: {
        travellers: {} as any,
        documents: [] as any[],
        addtionalContact: {
            email: '',
            mobile: '',
            mobileISD: ''
        } as any,
    },
    reducers: {
        setTravellerFieldByKey(state, action) {
            const { key, value, tIndex } = action.payload;
            state.travellers[tIndex][key] = value;
        },
        setAllTravelers(state, action) {
            const { value } = action.payload;
            state.travellers = value;
        },
        setTraveller(state, action) {
            const traveller = action.payload;
            state.travellers[traveller.paxId] = traveller;
        },
        setReportingParamByIndex(state, action) {
            const { value, rpIndex, travellerIndex, isTouched } = action.payload;
            state.travellers[travellerIndex].reportingDetails[rpIndex].value = value;
            state.travellers[travellerIndex].reportingDetails[rpIndex].isTouched = isTouched;
        },
        setUploadedDocuments(state, action) {
            const data = action.payload;
            if (data.length == 0)
                state.documents.length = 0;
            else
                state.documents = action.payload
        },
        setAdditionalContact(state, action) {
            state.addtionalContact = action.payload
        },
        setAddtionalContactByKey(state, action) {
            const { key, value } = action.payload;
            state.addtionalContact[key] = value;
        }
    }
})

export const {
    setAllTravelers,
    setTravellerFieldByKey,
    setTraveller,
    setReportingParamByIndex,
    setUploadedDocuments,
    setAdditionalContact,
    setAddtionalContactByKey,
} = travellerDataSlice.actions
export const travellerDataReducer = travellerDataSlice.reducer