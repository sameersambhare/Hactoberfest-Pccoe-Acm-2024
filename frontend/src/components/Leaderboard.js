import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./Leaderboard.css";

const GITHUB_API_URL = "https://api.github.com/search/issues";

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orgName] = useState("pccoe-acm-hacktoberfest-2023"); // Set the organization name you want to track

  // Fetch the users with the highest number of merged pull requests for a specific organization
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Example search query: closed pull requests in repositories of a specific organization
        const response = await axios.get(GITHUB_API_URL, {
          params: {
            q: `is:pr is:merged org:${orgName}`, // Search for merged PRs within the organization
            per_page: 100, // Get 100 results per page
          },
        });

        const prData = response.data.items;

        // Map PR data to user leaderboard
        const userPRCount = prData.reduce((acc, pr) => {
          const userName = pr.user.login;
          if (!acc[userName]) {
            acc[userName] = {
              name: userName,
              avatar: pr.user.avatar_url,
              prCount: 0,
            };
          }
          acc[userName].prCount += 1;
          return acc;
        }, {});

        // Convert to array and sort by PR count
        const leaderboardArray = Object.values(userPRCount).sort(
          (a, b) => b.prCount - a.prCount
        );

        setLeaderboardData(leaderboardArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [orgName]); // Re-run if orgName changes

  // Filter users based on the search term
  const filteredLeaderboard = leaderboardData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  // Get the top three users
  const topThree = filteredLeaderboard.slice(0, 3);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4 sm:p-6">
      {/* Top 3 Users */}
      <div className="flex flex-row justify-center w-full max-w-4xl mb-8">
        {/* Second Rank (Left) */}
        {topThree[1] && (
          <div className={`user-card bg-silver`}>
            <img
              src={topThree[1].avatar}
              alt="User avatar"
              className="w-24 h-24 bg-gray-700 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">{topThree[1].name}</h2>
            <p className="text-lg font-bold">
              PRs Merged: {topThree[1].prCount}
            </p>
            <p className="text-lg">Rank #2</p>
          </div>
        )}

        {/* First Rank (Middle) with larger scale */}
        {topThree[0] && (
          <div className={`user-card bg-gold scale-110 mx-auto`}>
            <img
              src={topThree[0].avatar}
              alt="User avatar"
              className="w-24 h-24 bg-gray-700 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">{topThree[0].name}</h2>
            <p className="text-lg font-bold">
              PRs Merged: {topThree[0].prCount}
            </p>
            <p className="text-lg">Rank #1</p>
          </div>
        )}

        {/* Third Rank (Right) */}
        {topThree[2] && (
          <div className={`user-card bg-bronze`}>
            <img
              src={topThree[2].avatar}
              alt="User avatar"
              className="w-24 h-24 bg-gray-700 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold">{topThree[2].name}</h2>
            <p className="text-lg font-bold">
              PRs Merged: {topThree[2].prCount}
            </p>
            <p className="text-lg">Rank #3</p>
          </div>
        )}
      </div>

      {/* Leaderboard Table for Other Players */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-4 overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-3 text-left text-sm">Rank</th>
              <th className="p-3 text-left text-sm">Avatar</th>
              <th className="p-3 text-left text-sm">Name</th>
              <th className="p-3 text-left text-sm">Pull Requests Merged</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaderboard.map((user, index) => (
              <tr
                key={user.name}
                className="border-b border-gray-700 transition duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
              >
                <td className="p-3 text-sm">{index + 1}</td>
                <td className="p-3 text-sm">
                  <img
                    src={user.avatar}
                    alt={`${user.name} avatar`}
                    className="w-8 h-8 bg-gray-700 rounded-full"
                  />
                </td>
                <td className="p-3 text-sm">{user.name}</td>
                <td className="p-3 text-sm">{user.prCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
