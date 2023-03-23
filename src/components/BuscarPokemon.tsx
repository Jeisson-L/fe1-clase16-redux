import React from "react";
import ListadoPokemons from "./ListadoPokemons";
import VistaPokemon from "./VistaPokemon";
import { useDispatch } from "react-redux"
import { useState } from "react"
import { createSearch } from "../redux/PokemonsSlices";

const BuscarPokemon = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onBuscarClick = () => {
        dispatch(createSearch(inputValue))
    }

    return (
        <>
            <div id="buscarPokemon">
                <label>Buscar pokemon</label>
                <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} onChange={handleChange}/>
                <button onClick={() => onBuscarClick()}>Buscar</button>
            </div>
            <div style={{display: 'flex', flexDirection:'row'}}>
                <ListadoPokemons /> 
                <VistaPokemon />
            </div>
        </>
    );
}

export default BuscarPokemon;
