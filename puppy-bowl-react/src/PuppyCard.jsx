import React from "react";
import RenderSinglePup from "./RenderSinglePup";
import { useNavigate } from "react-router-dom";
import { getPuppies, removePlayer } from "./api";

export default function PuppyCard(props) {
  const navigate = useNavigate();
  const dogid = props.pup.id;
  return (
    <div className="single-player-card" id={dogid}>
      <div className="header-info">
        <p className="pup-title">{props.pup.name}</p>
        <p className="pup-number">#{props.pup.id}</p>
      </div>
      <img src={props.pup.imageUrl} alt={props.pup.name} />
      <button className="detail-button" data-id={props.pup.id} onClick={()=>{
       navigate(`/${dogid}`)
        
      }}>
        See details
      </button>
      <button className="remove-button" data-id={props.pup.id}
      onClick={async()=>{
        function removePuppy (){
          const pupdiv = document.getElementById(`${props.pup.id}`)
          pupdiv.remove();
        }
        removePuppy();
        await removePlayer(props.pup.id);
       
         
      }}
      >
        remove
      </button>
    </div>
  );
}
