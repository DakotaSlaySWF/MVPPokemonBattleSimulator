import './App.css';
import {useEffect, useState} from "react";
import TopAppBar from "./component/TopAppBar";
import Box from "@mui/material/Box";
import BattleScreen from "./component/BattleScreen";
import TeamView from "./component/TeamView";
import axios from "axios";


const testCurrentTeam = {
    name: "User",
    team: [
        {
            name:"bulbasaur",
            srcFront:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            srcBack:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Bulbasaur @ Aguav Berry ",
                Ability:"Overgrow",
                EVs:"252 HP / 252 Atk / 4 SpA",
                nature:"Brave Nature",
                moves: [
                    "Body Slam",
                    "Curse",
                    "Double-Edge",
                    "Energy Ball"
                ]
            }

        },
        {
            name:"ivysaur",
            srcFront:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            srcBack:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Ivysaur @ Assault Vest",
                Ability:"Overgrow",
                EVs:"252 HP / 252 Atk / 4 SpA",
                nature:"Brave Nature",
                moves: [
                    "Razor Leaf",
                    "Solar Beam",
                    "Knock Off",
                    "Leaf Storm"
                ]
            }
        },
        {
            name:"venusaur",
            srcFront:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            srcBack:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Venusaur @ Choice Band",
                Ability:"Overgrow",
                EVs:"252 HP / 4 SpA / 252 Spe",
                nature:"Hasty Nature",
                moves: [
                    "Sleep Powder",
                    "Solar Beam",
                    "Vine Whip",
                    "Take Down"
                ]
            }

        },
        {
            name:"nidoran-m",
            srcFront:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
            srcBack:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Nidoran-M (M) @ Choice Specs",
                Ability:"Hustle",
                EVs:"248 HP / 8 Atk / 252 SpA",
                nature:"Mild Nature",
                moves: [
                    "Blizzard",
                    "Detect",
                    "Drill Run",
                    "Earth Power"
                ]
            }
        },
        {
            name:"nidorino",
            srcFront:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
            srcBack:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/33.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Nidorino (M) @ Focus Sash",
                Ability:"Poison Point",
                EVs:"252 HP / 252 Atk / 4 SpA",
                nature:"Naughty Nature",
                moves: [
                    "Facade",
                    "Head Smash",
                    "Hone Claws",
                    "Ice Beam"
                ]
            }
        },
        {
            name:"nidoking",
            srcFront:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
            srcBack:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Nidoking (M) @ Expert Belt",
                Ability:"Poison Point",
                EVs:"252 HP / 4 Atk / 252 Spe",
                nature:"Jolly Nature",
                moves: [
                    "Avalanche",
                    "Body Press",
                    "Body Slam",
                    "Counter"
                ]
            }
        }
    ]
};
const testCurrentTrainerTeam={
    name:"Red",
    team: [
        {
            name:"charmander",
            srcFront:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            srcBack:"/sprites/sprites/pokemon/versions/generation-v/black-white/back/4.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Charmander @ Aguav Berry",
                Ability:"Blaze",
                EVs:"252 HP / 252 Atk / 4 SpA",
                nature:"Lonely Nature",
                moves: [
                    "Acrobatics",
                    "Ancient Power",
                    "Brick Break",
                    "Crunch"
                ]
            }

        },
        {
            name:"charmeleon",
            srcFront:"/sprites/sprites/pokemon/versions/generation-v/black-white/5.png",
            srcBack:"/sprites/sprites/pokemon/versions/generation-v/black-white/back/5.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Charmeleon @ Figy Berry",
                Ability:"Blaze",
                EVs:"252 HP / 252 Atk / 4 SpA",
                nature:"Lonely Nature",
                moves: [
                    "Dragon Claw",
                    "Dragon Dance",
                    "Dragon Pulse",
                    "Fire Fang"
                ]
            }
        },
        {
            name:"charizard",
            srcFront:"/sprites/sprites/pokemon/versions/generation-v/black-white/6.png",
            srcBack:"/sprites/sprites/pokemon/versions/generation-v/black-white/back/6.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Charizard @ Aguav Berry",
                Ability:"Blaze",
                EVs:" 4 Atk / 252 SpA / 252 Spe",
                nature:"Hasty Nature",
                moves: [
                    "Flamethrower",
                    "Heat Wave",
                    "Iron Tail",
                    "Protect"
                ]
            }
        },
        {
            name:"nidoran-f",
            srcFront:"/sprites/sprites/pokemon/versions/generation-v/black-white/29.png",
            srcBack:"/sprites/sprites/pokemon/versions/generation-v/black-white/back/29.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Nidoran-F (F) @ Figy Berry",
                Ability:"Poison Point",
                EVs:"252 HP / 8 Atk / 252 Def",
                nature:"Impish Nature",
                moves: [
                    "Disable",
                    "Poison Jab",
                    "Rest",
                    "Sleep Talk"
                ]
            }
        },
        {
            name:"nidorina",
            srcFront:"/sprites/sprites/pokemon/versions/generation-v/black-white/30.png",
            srcBack:"/sprites/sprites/pokemon/versions/generation-v/black-white/back/30.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Nidorina (F) @ Eviolite",
                Ability:"Hustle",
                EVs:"248 HP / 8 Atk / 252 SpA",
                nature:"Rash Nature",
                moves: [
                    "Sludge Bomb",
                    "Sucker Punch",
                    "Super Fang",
                    "Thunder"
                ]
            }
        },
        {
            name:"nidoqueen",
            srcFront:"/sprites/sprites/pokemon/versions/generation-v/black-white/31.png",
            srcBack:"/sprites/sprites/pokemon/versions/generation-v/black-white/back/31.png",
            currentHP:100,
            pokemonShowdownInfo:{
                name: "Nidoqueen (F) @ Aguav Berry ",
                Ability:"Poison Point",
                EVs:"252 HP / 8 Atk / 252 Def",
                nature:"Relaxed Nature",
                moves: [
                    "Thunderbolt",
                    "Toxic",
                    "Toxic Spikes",
                    "Shadow Claw"
                ]
            }
        }

    ]
};

const testLog = [
    "Battle Start!",
    "Pokemon Trainer Red sends out Pikachu",
    "You send out Bulbasuar",
]



function App() {

  let [currentPokemon,setCurrentPokemon] = useState(testCurrentTeam.team[0]);
  let [currentTrainerPokemon,setCurrentTrainerPokemon] = useState({});
  let [currentTeam,setCurrentTeam] = useState(testCurrentTeam);
  let [currentTrainerTeam,setCurrentTrainerTeam] = useState([]);
  let [log,setLog] = useState(testLog);

  const getTrainerTeamFromDB = async () => {
    let {data} = await axios.get("http://localhost:8080/trainer/1");
    await setCurrentTrainerTeam(data);
    await setCurrentTrainerPokemon(data.team[0]);
  }

  useEffect(()=>{
    getTrainerTeamFromDB();
  },[])

  const changeCurrentPokemon = async (pokemon) => {
      setCurrentPokemon(pokemon);
  }

  const changeCurrentTrainerPokemon = async (pokemon) => {
      setCurrentTrainerPokemon(pokemon);
  }

  return (
    <div className="App">
      <Box>
          <TopAppBar/>
          <TeamView team={currentTrainerTeam} isTrainerTeam={true} currentPokemon={currentTrainerPokemon} changeCurrentPokemon={changeCurrentTrainerPokemon}/>
          <BattleScreen currentPokemon={currentPokemon} currentTrainerPokemon={currentTrainerPokemon} log={log}/>
          <TeamView team={currentTeam} isTrainerTeam={false} currentPokemon={currentPokemon} changeCurrentPokemon={changeCurrentPokemon}/>
      </Box>
    </div>
  );
}

export default App;
