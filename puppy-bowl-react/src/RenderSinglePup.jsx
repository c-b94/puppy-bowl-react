import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import PuppyCard from "./PuppyCard";
import { getPuppy } from "./api";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function RenderSinglePup() {
  const navigate = useNavigate();
  const [selectedPup, setSelectedPup] = useState({});
  const { dogid } = useParams();
  useEffect(() => {
    async function apiFetchSingleDog() {
      const dog = await getPuppy(dogid);
      setSelectedPup(dog);
    }
    apiFetchSingleDog();
  }, []);
  return (
    <div className="single-player-view">
      <div className="header-info">
        <p className="pup-title">{selectedPup.name}</p>
        <p className="pup-number">#{selectedPup.id}</p>
      </div>
      <p>Team: {selectedPup.team ? selectedPup.name : "Unassigned"}</p>
      <p>Breed: {selectedPup.breed}</p>
      <img src={selectedPup.imageUrl} alt={selectedPup.name} />

      <button
        id="see-all"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to all players
      </button>
    </div>
  );
}
