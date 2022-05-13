import {Stack} from "@mui/material";
import PokemonMove from "./PokemonMove";

const MoveList = ({currentPokemon}) => {

    return (
        <Stack spacing={2} maxWidth={'33%'} sx={{flex:1}} display={"flex"} flexDirection={"column"} component={"span"}>
            {currentPokemon.pokemonShowdownInfo.moves.map((move)=>{
                return <PokemonMove key={move} move={move}/>
            })}
        </Stack>
    );

}
export default MoveList;