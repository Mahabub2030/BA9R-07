import { FaFlag } from "react-icons/fa";
const Player = ({ player,handelChoosePlayers }) => {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;
  return (
    <div className="border border-[rgba(19, 19, 19, 0.1);] p-6 rounded-2xl">
      <img className="mb-6" src={image} alt="" />

      <div> 
        <div className="flex items-center">
          <img className="w-5" src="../../../assets/iconUser.png" alt="" />
          <h3 className="flex items-center  ">{name} </h3>
        </div>

        <div className="flex justify-between mb-5">
          <p className="flex items-center">
            {" "}
            <FaFlag className="w-6" /> {country}{" "}
          </p>
          <button>All-Rounder</button>
        </div>

        <hr />

        <p className="mt-5">Rating</p>
        <div className="flex justify-between">
          <p>{battingType}</p>
          <p>{bowlingType}</p>
        </div>
        <div className="flex justify-between" >
        <p>Price : {biddingPrice}</p>
        <div className="border border-slate-400 px-5 py-1 rounded-md" >
          <button onClick={()=>handelChoosePlayers(player)}
          >Choose Player</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
