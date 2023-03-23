import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PokemnonState{
    searchValue:string
}

const initialState: PokemnonState = {
    searchValue: "",
}

export const pokemonSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        createSearch(state, action : PayloadAction<string>){
            state.searchValue = action.payload
        }
    }
})

export const { createSearch } = pokemonSlice.actions

export default pokemonSlice.reducer