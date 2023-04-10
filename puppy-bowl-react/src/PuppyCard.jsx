import React from "react";
import RenderSinglePup from "./RenderSinglePup";

export default function PuppyCard(props) {
  return (
    <div className="single-player-card">
      <div className="header-info">
        <p className="pup-title">{props.pup.name}</p>
        <p className="pup-number">#{props.pup.id}</p>
      </div>
      <img src={props.pup.imageUrl} alt={props.pup.name} />
      <button className="detail-button" data-id={props.pup.id} onClick={()=>{
        props.selectpup(props.pup.id)
        
      }}>
        See details
      </button>
      <button className="remove-button" data-id={props.pup.id}>
        remove
      </button>
    </div>
  );
}
