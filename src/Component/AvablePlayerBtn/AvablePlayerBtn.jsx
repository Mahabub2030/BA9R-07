import Home from '../SelectedPlayer/Home';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import './AbableBtn.css';

const AvablePlayerBtn = ({ handelIsActiveStatus, isActive, choosePlayer, handelDeleted, players, handelChoosePlayers }) => {
    const handleChoosePlayer = (player) => {
        if (choosePlayer.length >= 6) {
            alert('You can only select up to 6 players.'); // Alert or Toast message
            return; // Early return to prevent adding the player
        }
        handelChoosePlayers(player); // Call the original function to add the player
    };

    return (
        <div className="mb-20">
            
            
            <button 
                onClick={() => handelIsActiveStatus("available")} 
                className={`${isActive.available ? 'active mr-6 border border-[rgba(19,19,19,0.1)] px-10 py-1 rounded-lg cursor-pointer text-base font-bold' : 'mr-6 border border-[rgba(19,19,19,0.1)] px-10 py-1 rounded-lg cursor-pointer text-base font-bold'}`}
            >
                Available
            </button>
           
            <button
                onClick={() => handelIsActiveStatus("selected")}
                className={`${isActive.available ? 'mr-6 border  border-[rgba(19,19,19,0.1)] px-10 py-1 rounded-lg cursor-pointer text-base font-bold' : 'active mr-6 border border-[rgba(19,19,19,0.1)] px-10 py-1 rounded-lg cursor-pointer text-base font-bold'}`}
            >
                Selected {choosePlayer.length}
            </button>

            {
                isActive.available ? (
                    <Home
                        handelChoosePlayers={handleChoosePlayer} // Use the modified function
                        players={players}
                        handelIsActiveStatus={handelIsActiveStatus}
                    />
                ) : (
                    <SelectedPlayer
                        handelDeleted={handelDeleted}
                        choosePlayer={choosePlayer}
                    />
                )
            }
        </div>
    );
};

export default AvablePlayerBtn;
