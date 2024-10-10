import React from "react";
import { NFLPlayer } from "../../types/NFLPlayer"; // Assuming you have a Player type defined

interface PlayerCardProps {
  player: NFLPlayer;
}

function PlayerCard({ player }: PlayerCardProps): React.ReactNode {
  return (
    <div className="bg-white p-6 max-w-sm">
      <div className="text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{player.name}</h2>
        <p className="text-gray-600 mb-4">
          #{player.number} | {player.position}
        </p>
      </div>
      <div className="pt-4">
        <p className="text-gray-700">
          <span className="font-semibold">Team:</span> {player.team_id}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">College:</span> {player.college}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Stats</h3>
        <ul className="list-disc list-outside text-gray-700 pl-5">
          <li>Passing Yards: {player.stats.passingYards}</li>
          <li>Passing Touchdowns: {player.stats.passingTouchdowns}</li>
          <li>Interceptions: {player.stats.interceptions}</li>
        </ul>
      </div>
    </div>
  );
}

export default PlayerCard;
