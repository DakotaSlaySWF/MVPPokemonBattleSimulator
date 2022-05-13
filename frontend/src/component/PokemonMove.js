import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";

const PokemonMove = ({move}) => {
    return (
      <Card sx={{flex:1}} onClick={()=>{
          console.log(move);
      }}>
          <CardContent>
              <Typography variant={"h5"} component={"h5"}>
                  {move}
              </Typography>
          </CardContent>
      </Card>
    );
}
export default PokemonMove;