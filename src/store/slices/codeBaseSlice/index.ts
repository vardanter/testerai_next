import { createSlice } from "@reduxjs/toolkit";

const codeBaseSlice = createSlice({
    name: "codeBase",
    initialState: {
        isAddFileActive: false,
        isAddSnippetActive: false,
        isCodeBaseActive: true
    },
    reducers: {
        addFile(state) {
            state.isAddFileActive = true
            state.isCodeBaseActive = false
        },
        addSnippet(state) {
            state.isAddSnippetActive = true
            state.isCodeBaseActive = false
        },
        reset(state) {
            state.isAddFileActive = false
            state.isAddSnippetActive = false
            state.isCodeBaseActive = true
        }
    }
})

export const { addFile, addSnippet, reset } = codeBaseSlice.actions

export default codeBaseSlice.reducer