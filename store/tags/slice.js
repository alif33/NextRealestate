import { createSlice } from "@reduxjs/toolkit"

export const tagSlice = createSlice({
    name: "tags",
    initialState: {
        tagList: [],
        isLoading: true

    },
    reducers: {
        setTags: (state, action) => {
            return {
                ...state,
                setTags: action.payload,
                isLoading: false
            }
        },

    }
})
