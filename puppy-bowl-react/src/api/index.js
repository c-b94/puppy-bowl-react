import RenderAllPuppies from "../RenderAllPuppies";

const classroom = "2109-UNF-HY-WEB-PT/";
const URL = `https://fsa-puppy-bowl.herokuapp.com/api/${classroom}`;

export async function getPuppies() {
  try {
    const response = await fetch(`${URL}players/`);
    const result = await response.json();

    return result.data.players;
  } catch (err) {
    console.error(`getPuppies failed to fetch from ${URL}players/`);
  }
}
export async function getPuppy(pupid) {
  try {
    const response = await fetch(`${URL}players/${pupid}`);
    const result = await response.json();
    console.log("testing caliing api getpuppy");
    return result.data.player;
  } catch (err) {
    console.error(`getPuppy failed to fetch from ${URL}players/${pupid}`);
  }
}
export const addNewDog = async (dogname,dogbreed) => {
  try {
    const response = await fetch(`${URL}players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dogname,
          breed: dogbreed,
        }),
      });
      const createdDog = await response.json();
      console.log(createdDog);
      return createdDog;
  } catch (error) {
    console.error("Error: could not submit player",`${URL}players/`,error)
  }
};
export const removePlayer = async (pupid) => {
  try {
    const response = await fetch(`${URL}players/${pupid}`, {
      method: "DELETE",
    });
    
    const result = await response.json();
    
  } catch (error) {
    console.error("Error: could not remove",`${URL}players/${pupid}`);
  }
};
