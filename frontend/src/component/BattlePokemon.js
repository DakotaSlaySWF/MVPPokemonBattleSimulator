import {Grid} from "@mui/material";
import HPBar from "./HPBar";

const BattlePokemon = ({pokemon,isTrainerPokemon,children}) => {

    return (
        <Grid item xs={6}>
            <HPBar currentPokemon={pokemon}/>
            {isTrainerPokemon?<img src={pokemon.srcFront} alt={pokemon.name} style={{width: 300, height: 300}}/>:<img src={pokemon.srcBack} alt={pokemon.name} style={{width: 300, height: 300}}/>}
        </Grid>
    );
}
export default BattlePokemon;