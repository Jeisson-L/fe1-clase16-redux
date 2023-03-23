
import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './PokemonsSlices'


export const store = configureStore({
    reducer: {
        pokemones: pokemonSlice
    },
  
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch