const SelectedPlayer = ({ choosePlayer, handelDeleted }) => {
    return (
        <div>
           
            <h2 className="text-xl mt-6 font-black">Selected Player {choosePlayer.length} / 6</h2>

            {choosePlayer.map((player, idx) => (
                <div key={idx}>
                    <div className="flex  md:w-[1200px] justify-between mb-10 mt-10 border border-slate-400 p-5 rounded-md">
                        <div className="flex">
                            <div className="mr-4">
                                <img className="w-24" src={player.image} alt="" />
                            </div>
                            <div>
                                <p className="text-xl font-bold">{player.name}</p>
                                <p className="text-base font-semibold text-[rgba(19,19,19,0.68)]">{player.battingType}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => handelDeleted(player.playerId)}>
                                <img className="w-6" src="https://i.ibb.co.com/17mL2mt/delete.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SelectedPlayer;
