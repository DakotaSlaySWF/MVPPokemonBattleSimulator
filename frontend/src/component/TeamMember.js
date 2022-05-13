import {Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import HPBar from "./HPBar";

const TeamMember = ({teamMember,isCurrentlyOnTheField,changeCurrentPokemon}) => {
    let styleCard;
    if(isCurrentlyOnTheField){
        styleCard = {
            backgroundColor:"dimgrey"
        }
    } else {
        styleCard = {

        }
    }

    return (
      <Grid item xs={2}>
          <Card style={styleCard}
                onClick={()=>{changeCurrentPokemon(teamMember)}}
          >
              <CardMedia
                  component={"img"}
                  style={{width:100,height:100}}
                  image={teamMember.srcFront}
                  alt={teamMember.name}
              />
              <CardContent>
                <Typography variant={"h5"} component={"div"}>
                    {teamMember.name}
                </Typography>
                  <HPBar currentPokemon={teamMember}/>
              </CardContent>
          </Card>
      </Grid>
    );
}
export default TeamMember;