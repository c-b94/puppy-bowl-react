import React from "react";
import PuppyCard from "./PuppyCard";
export default function RenderAllPuppies(props) {
  return (
    <div id="all-player-container">
      {props.allPuppies.map((pup) => {
        //console.log("testing render", pup.id);
        return <PuppyCard key={pup.id} pup={pup} selectpup={props.selectpup}/>;
      })}
    </div>
  );
}
