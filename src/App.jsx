// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import Header from './components/Header';
import Hero from './components/Hero';
import PlayerList from './components/PlayerList';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; 
import initialPlayers from './data/players.json';

function App() {
  const [coins, setCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    setPlayers(initialPlayers);
  }, []);

  const handleClaimCredits = () => {
    setCoins(currentCoins => currentCoins + 5000);
    toast.success('5,000 Coins Claimed Successfully!');
  };

  const handleChoosePlayer = (playerToBuy) => {
    if (selectedPlayers.some(p => p.id === playerToBuy.id)) {
      toast.error("You have already selected this player.");
      return;
    }
    if (coins >= playerToBuy.price) {
      setCoins(currentCoins => currentCoins - playerToBuy.price);
      setSelectedPlayers(currentSelected => [...currentSelected, playerToBuy]);
      toast.success(`${playerToBuy.name} has been added to your team!`);
    } else {
      toast.error("Not enough coins to buy this player!");
    }
  };

  const handleRemovePlayer = (playerToRemove) => {
    setCoins(currentCoins => currentCoins + playerToRemove.price);
    setSelectedPlayers(currentSelected =>
      currentSelected.filter(player => player.id !== playerToRemove.id)
    );
    toast.success(`${playerToRemove.name} has been removed from your team.`);
  };


  return (
    <div className="bg-white">
      <Toaster position="top-center" reverseOrder={false} />
      
      <Header coins={coins} />
      <main>
        <Hero onClaimCredits={handleClaimCredits} />
        <PlayerList
          players={players}
          selectedPlayers={selectedPlayers}
          onChoosePlayer={handleChoosePlayer}
          onRemovePlayer={handleRemovePlayer}
        />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;