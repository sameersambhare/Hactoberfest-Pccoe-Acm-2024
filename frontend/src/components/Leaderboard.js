import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import leaderboardData from './leaderboardData';
import './Leaderboard.css';

const Leaderboard = () => {
  // State to manage search input
  const [searchTerm, setSearchTerm] = useState('');

  // Sort the entire leaderboard data based on scores in descending order
  const sortedData = [...leaderboardData].sort((a, b) => b.score - a.score);
  
  // Get the top three users
  const topThree = sortedData.slice(0, 3);
  
  // Get the remaining users
  const others = sortedData.slice(3);

  // Filter users based on the search term
  const filteredOthers = others.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4 sm:p-6">
      {/* Top 3 Users */}
      <div className="flex flex-row justify-between w-full max-w-4xl mb-8">
        {/* Second Rank (Left) */}
        <div className={`user-card animate-zoom animate-delay-2`}>
          <img
            src={topThree[1].image}
            alt="User avatar"
            className="w-24 h-24 bg-gray-700 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{topThree[1].name}</h2>
          <p className="text-lg font-bold">Score {topThree[1].score}</p>
          <p className="text-lg">Rank #{topThree[1].rank}</p>
        </div>

        {/* First Rank (Middle) with larger scale */}
        <div className={`user-card animate-zoom animate-delay-1 scale-110 mx-auto`}>
          <img
            src={topThree[0].image}
            alt="User avatar"
            className="w-24 h-24 bg-gray-700 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{topThree[0].name}</h2>
          <p className="text-lg font-bold">Score {topThree[0].score}</p>
          <p className="text-lg">Rank #{topThree[0].rank}</p>
        </div>

        {/* Third Rank (Right) */}
        <div className={`user-card animate-zoom animate-delay-3`}>
          <img
            src={topThree[2].image}
            alt="User avatar"
            className="w-24 h-24 bg-gray-700 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold">{topThree[2].name}</h2>
          <p className="text-lg font-bold">Score {topThree[2].score}</p>
          <p className="text-lg">Rank #{topThree[2].rank}</p>
        </div>
      </div>

      {/* Search Bar with Icon */}
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white pl-10"
        />
        <div className="absolute top-2 left-2">
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Other Players */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3 text-left text-sm">Rank</th>
              <th className="p-3 text-left text-sm">Name</th>
              <th className="p-3 text-left text-sm">User Name</th>
              <th className="p-3 text-left text-sm">Challenges</th>
              <th className="p-3 text-left text-sm">Score</th>
            </tr>
          </thead>
          <tbody>
            {filteredOthers.map((user) => (
              <tr
                key={user.rank} // Use a unique key
                className="border-b border-gray-700 transition duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
              >
                <td className="p-3 text-sm">{user.rank}</td>
                <td className="p-3 text-sm flex items-center">
                  <img
                    src={user.image}
                    alt="User avatar"
                    className="w-8 h-8 bg-gray-700 rounded-full mr-2"
                  />
                  {user.name}
                </td>
                <td className="p-3 text-sm">{user.username}</td>
                <td className="p-3 text-sm">{user.challenges}</td>
                <td className="p-3 text-sm">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
