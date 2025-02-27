import ListadoPokemonsItem from "../components/ListadoPokemonsItem";
import {buscarPokemons} from "../queries/pokemon.queries";
import {Pokemon} from "../types/pokemon.types";
import {extractPokemonId} from "../services/pokemon.services";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

/**
 * Visualiza una lista de pokemons
 *
 * Ej:
 * <pre>
 *     <ListadoPokemons />
 * </pre>
 * @param {string} name nombre del pokemon a buscar
 * @param seleccionarPokemon una funcion que se ejecuta al hacer click en el pokemon y guarda en un estado el pokemon seleccionado
 * @author Digital House
 */



const ListadoPokemons = () => {
    //const [isLoading, setLoading] = useState(true);
    //const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);
    const searchValue = String(useSelector<{pokemones:{searchValue:string}}>(state => state.pokemones.searchValue))

    const {data:pokemons, isLoading} = useQuery(["pokemons", searchValue], () => buscarPokemons(searchValue));

    
    /*useEffect(() => {
        
    },[])*/

    if (isLoading) return <div>Cargando pokemons...</div>

    return (
        <div id="listadoCategorias">
            {pokemons && pokemons.map((pokemon: Pokemon) => (
                <ListadoPokemonsItem pokemon={pokemon}
                                     seleccionarPokemon={() => {}}
                                     key={extractPokemonId(pokemon.url)}/>
            ))}
        </div>
    );
}

export default ListadoPokemons;
