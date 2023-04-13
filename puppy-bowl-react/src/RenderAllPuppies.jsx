import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PuppyCard from "./PuppyCard";
import { getPuppies } from "./api";

export default function RenderAllPuppies() {
  console.log("running now");
  const [allPuppies, setAllPuppies] = useState([]);
  useEffect(() => {
    async function apiFetchAllDogs() {
      const dogList = await getPuppies();
      setAllPuppies(dogList);
    }
    apiFetchAllDogs();
  }, []);

  return (
    <div id="all-player-container">
      {allPuppies.map((pup) => {
        return <PuppyCard key={pup.id} pup={pup} />;
      })}
    </div>
  );
}
