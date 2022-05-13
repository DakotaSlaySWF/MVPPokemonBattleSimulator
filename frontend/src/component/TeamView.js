import {Grid} from "@mui/material";
import TeamMember from "./TeamMember";


const TeamView = ({team,isTrainerTeam,currentPokemon,changeCurrentPokemon}) => {
    let counter = 0;
    return (
        <Grid container spacing={2}>
            {team.team&&team.team.map((teamMember)=>{
                //Need to check if I need to redo the comparison between teammember and currentPokemon
                return <TeamMember key={counter++}
                                   teamMember={teamMember}
                                   isCurrentlyOnTheField={JSON.stringify(currentPokemon)===JSON.stringify(teamMember)}
                                   changeCurrentPokemon={changeCurrentPokemon}
                />
            })}
        </Grid>
    );
}
export default TeamView;