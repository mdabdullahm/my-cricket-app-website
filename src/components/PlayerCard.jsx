import { FaTrash } from 'react-icons/fa';

const PlayerCard = ({ player, onChoosePlayer, onRemovePlayer, isSelected, view }) => {
  const { name, country, role, price, battingStyle, bowlingStyle, imageUrl } = player;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-between">
      <div>
        <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
          {imageUrl ? <img src={imageUrl} alt={name} className="w-full h-full object-cover" /> : <span className="text-gray-400">No Image</span>}
        </div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{role}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">{country}</p>
        <div className="text-sm text-gray-700 space-y-2 mb-4">
          <div className="flex justify-between"><span>Batting:</span><span className="font-medium">{battingStyle}</span></div>
          <div className="flex justify-between"><span>Bowling:</span><span className="font-medium">{bowlingStyle}</span></div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t">
        <div className="text-left">
          <span className="text-xs text-gray-500">Price</span>
          <p className="font-bold text-lg text-gray-800">${price.toLocaleString()}</p>
        </div>
        <div className="text-right">
          {view === 'selected' ? (
            <button
              onClick={() => onRemovePlayer(player)}
              className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 font-semibold text-sm rounded-lg transition-all flex items-center gap-2"
            >
              <FaTrash />
              Delete
            </button>
          ) : (
            <button
              onClick={() => onChoosePlayer(player)}
              disabled={isSelected}
              className={`px-4 py-2 font-semibold text-sm rounded-lg transition-all ${
                isSelected
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-yellow-400 text-black hover:bg-yellow-500'
              }`}
            >
              {isSelected ? 'Selected' : 'Choose Player'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;