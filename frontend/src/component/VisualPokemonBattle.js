import {Container, Grid} from "@mui/material";
import BattlePokemon from "./BattlePokemon";

const VisualPokemonBattle = ({currentPokemon,currentTrainerPokemon}) => {

    return (
        <Container maxWidth={"20%"} sx={{flex:1}} component={"span"}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                </Grid>
                <BattlePokemon pokemon={currentTrainerPokemon} isTrainerPokemon={true}/>
                <BattlePokemon pokemon={currentPokemon} isTrainerPokemon={false}/>
            </Grid>
        </Container>
    );
}
export default VisualPokemonBattle;