import { FaFlag } from "react-icons/fa";

const Home = ({ players, handelChoosePlayers }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {players.map((player, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded-md">
                    <div className="w-80 h-60">
                    <img src={player.image} alt={player.name} className="w-full h-auto" />
                    </div>
                    

                    <div className="flex items-center mt-6">
                        <img className="w-4 mr-2" src="https://i.ibb.co.com/b2jJM4R/iconUser.png" alt="" />
                        <h2 className="text-base font-bold">{player.name}</h2>
                    </div>

                    <div className="flex justify-between items-center mb-8">
                        <p className="flex items-center text-base font-medium text-[rgba(19,19,19,0.66)]">
                            <FaFlag className="text-2xl mr-2" /> {player.country}
                        </p>
                        <p className="bg-[rgba(19,19,19,0.05)] px-3 py-2 rounded-md">{player.role}</p>
                    </div>

                    <hr />
                    <p className="text-[rgb(19,19,19)] text-base font-bold mt-5">Rating</p>
                    <div className="flex justify-between mt-5">
                        <p className="text-base font-semibold">{player.battingType}</p>
                        <p className="text-base font-semibold text-[rgba(19,19,19,0.7)]">{player.bowlingType}</p>
                    </div>

                    <div className="flex justify-between mb-5 mt-1">
                        <p className="text-base font-semibold mt-1">Price: ${player.biddingPrice}</p>
                        <button 
                            className="border border-[rgba(19,19,19,0.1)] px-5 py-[6px] rounded-md text-sm font-bold" 
                            onClick={() => handelChoosePlayers(player)} // Correctly using the function here
                        >
                            Choose Player
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
