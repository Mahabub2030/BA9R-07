import { useEffect } from "react";
import { useState } from "react";

import AvablePlayerBtn from "../AvablePlayerBtn/AvablePlayerBtn";

const Players = ({handelIsActiveStatus, isActive, handelChoosePlayers, choosePlayer, handelDeleted}) => {
    const [players, setPlayers ] = useState([])
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } ,[] )
console.log(players);

    return (
        <div className=" container w-11/12 mx-auto">
            <div className="flex justify-between mb-10">
            <h3 className="flex text-xl font-black" >Players : {players.length}</h3>
            <h2 className="flex text-xl font-black">Available Players</h2>
            </div>
        <div className="flex">
            <div>
             <div>
             <AvablePlayerBtn 
                handelChoosePlayers={handelChoosePlayers}
                players={players}
                handelDeleted={handelDeleted}
                choosePlayer={choosePlayer}
                isActive={isActive}
                handelIsActiveStatus={handelIsActiveStatus} 
                 ></AvablePlayerBtn>
             </div>
            </div>

        </div>

        </div>
    );
};

export default Players;