import React from "react";

export default function RenderSinglePup(props) {
  return (
    <div className="single-player-view">
      <div className="header-info">
        <p className="pup-title">{props.pup.name}</p>
        <p className="pup-number">#{props.pup.id}</p>
      </div>
      <p>Team: {props.pup.team ? props.pup.team.name : "Unassigned"}</p>
      <p>Breed: {props.pup.breed}</p>
      <img
        src={props.pup.imageUrl}
        alt={props.pup.name}
      />

      <button id="see-all">Back to all players</button>
    </div>
  );
}
