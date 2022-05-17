import { createSlice } from "@reduxjs/toolkit"

export const propertySearchSlice = createSlice({
    name: "search",
    initialState: {
    searchText: null
    },
    reducers: {
        setSearch: (state, action) => {
            return {
                ...state,
                searchText: action.payload,
                
            }
        },

    }
})
