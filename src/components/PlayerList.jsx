import React, { useState } from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = ({ players, selectedPlayers, onChoosePlayer, onRemovePlayer }) => {
  const [view, setView] = useState('available');

  const playersToDisplay = view === 'available' ? players : selectedPlayers;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
                {view === 'available' ? 'Available Players' : 'Your Selected Team'}
            </h2>
            <div>
                <button
                    onClick={() => setView('available')}
                    className={`${view === 'available' ? 'bg-yellow-400 text-gray-900' : 'bg-white border text-gray-600'} font-semibold py-2 px-4 rounded-l-md transition-colors`}
                >
                    Available
                </button>
                <button
                    onClick={() => setView('selected')}
                    className={`${view === 'selected' ? 'bg-yellow-400 text-gray-900' : 'bg-white border text-gray-600'} font-semibold py-2 px-4 rounded-r-md transition-colors`}
                >
                    Selected ({selectedPlayers.length})
                </button>
            </div>
        </div>
        
        {playersToDisplay.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              {view === 'available' ? 'No players available.' : 'You have not selected any players yet.'}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {playersToDisplay.map(player => {
            const isSelected = selectedPlayers.some(p => p.id === player.id);
            return (
              <PlayerCard
                key={player.id}
                player={player}
                onChoosePlayer={onChoosePlayer}
                onRemovePlayer={onRemovePlayer} 
                isSelected={isSelected}
                view={view} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlayerList;