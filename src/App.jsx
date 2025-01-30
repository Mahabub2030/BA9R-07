import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import "./App.css";
import NavBar from "./Component/Header/NavBar";
import Players from "./Component/Players/Players";
import Footer from "./Component/Footer/Footer";

function App() {
  const [claim, setClaim] = useState(0);
  
  const handelClaim = () => {
    setClaim((prevClaim) => prevClaim + 500000000);
  };

  const handelIncreasePrice = (price) => {
    setClaim((prevClaim) => prevClaim - price);
  };

  const handelDeletedPrice = (playerId) => {
    const player = choosePlayer.find((p) => p.playerId === playerId);
    setClaim((prevClaim) => prevClaim + player.biddingPrice);
  };

  const [isActive, setActive] = useState({
    available: true,
    status: "active",
  });

  const handelIsActiveStatus = (status) => {
    setActive({
      available: status === "available",
      status: status === "available" ? "active" : "selected",
    });
  };

  const [choosePlayer, setChoosePlayer] = useState([]);

  const handelChoosePlayers = (player) => {
    if (claim <= 0) {
      toast.error('Claim is 0. Please claim more credits before adding players.');
      return;
    }

    const isexist = choosePlayer.find((p) => p.playerId === player.playerId);
    if (isexist) {
      toast.error('Age thakei ace baba gure jaow');
    } else {
      handelIncreasePrice(player.biddingPrice);
      const newPlayer = [...choosePlayer, player];
      setChoosePlayer(newPlayer);
      toast.success(`${player.name} added to the team!`);
    }
  };

  const handelDeleted = (playerId) => {
    handelDeletedPrice(playerId);
    const deletedPlayers = choosePlayer.filter((p) => p.playerId !== playerId);
    setChoosePlayer(deletedPlayers);
  };

  return (
    <>
      <NavBar
        claim={claim}
        handelClaim={handelClaim}
      />
      <Players
        handelDeleted={handelDeleted}
        choosePlayer={choosePlayer}
        handelChoosePlayers={handelChoosePlayers}
        handelIsActiveStatus={handelIsActiveStatus}
        isActive={isActive}
      />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
