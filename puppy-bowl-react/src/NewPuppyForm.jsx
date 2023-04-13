import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { addNewDog } from './api';
import { useEffect } from 'react';



export default function NewPuppyForm() {
  const [name, setName] = useState("");
const [breed, setBreed] = useState("");

  return (
    <div className="forms">
        <form id="new-puppy-form" onSubmit={async (e)=>{
            e.preventDefault();
            const newDog = await addNewDog(name,breed)
            
        }}>
            <label htmlFor="">name</label>
            <input type="text" placeholder="ex:poofer" onChange={(e)=>{setName(e.target.value);}}/>
            <label htmlFor="">breed</label>
            <input type="text" placeholder="ex:Terrier" onChange={(e)=>{setBreed(e.target.value);}}/>
            <button>submit</button>
        </form>
    </div>
  );
}
