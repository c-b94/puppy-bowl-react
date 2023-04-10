import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from "react";
import "./App.css";
import RenderAllPuppies from "./RenderAllPuppies";
import RenderSinglePup from "./RenderSinglePup";

function App() {
  const classroom = "2109-UNF-HY-WEB-PT/";
  const URL = `https://fsa-puppy-bowl.herokuapp.com/api/${classroom}`;
  const [allPuppies, setAllPuppies] = useState([]);
  const [selectedPup, setSelectedPup] = useState({})
  const getPuppies = async () => {
    try {
      const response = await fetch(`${URL}players/`);
      const result = await response.json();
      setAllPuppies(result.data.players);
    } catch (err) {
      console.error(`getPuppies failed to fetch from ${URL}players/`);
    }
  };
  const getPuppy = async(pupid)=>{
    try{
      const response = await fetch(`${URL}players/${pupid}`);
      const result = await response.json();
      setSelectedPup(result.data.player);
    }catch(err){
      console.error(`getPuppy failed to fetch from ${URL}players/${pupid}`);
    }
  }
  useEffect(() => {
    getPuppies();
  }, []);
  console.log("testing selectedPup",selectedPup)
  console.log(allPuppies);
  return (
    <div className="App">
      <h1>get puppies</h1>

      <RenderAllPuppies allPuppies={allPuppies} selectpup ={getPuppy}/>
      <RenderSinglePup pup={selectedPup}/>
    </div>
  );
}

export default App;
