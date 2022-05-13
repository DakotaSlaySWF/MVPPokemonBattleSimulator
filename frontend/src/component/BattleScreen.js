import Box from "@mui/material/Box";
import MoveList from "./MoveList";
import VisualPokemonBattle from "./VisualPokemonBattle";
import BattleLog from "./BattleLog";

const BattleScreen = ({currentPokemon,currentTrainerPokemon,log}) => {


    return (
        <Box sx={{display:"flex"}}>
            <MoveList currentPokemon={currentPokemon}/>
            <VisualPokemonBattle currentTrainerPokemon={currentTrainerPokemon} currentPokemon={currentPokemon}/>
            <BattleLog log={log}/>
        </Box>
    );

}
export default BattleScreen;