import React, { useEffect } from 'react';
import { LampDemo } from '../components/ui/lamp';
import { EvervaultCard } from './ui/evervault-card';
import { Octokit } from '@octokit/core'; // Ensure Octokit is imported correctly
import "./Project.css";

const Projects = () => {
  // Fetch GitHub repositories using Octokit
  useEffect(() => {
    const fetchRepos = async () => {
      const octokit = new Octokit({
        auth: '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', // Use environment variables for token
      });

      try {
        const response = await octokit.request('GET /orgs/{org}/repos', {
          org: 'pccoe-acm-hacktoberfest-2023', // Replace with your organization
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching repositories', error);
      }
    };

    fetchRepos(); // Call the function to fetch the repos
  }, []);

  // Data array for rendering EvervaultCards
  const cardData = [
    { text: "Animated Card 1" },
    { text: "Animated Card 2" },
    { text: "Animated Card 3" }
  ];

  return (
    <div className='w-full min-h-screen relative flex flex-col justify-center items-center'>
      {/* Lamp Demo */}
      <LampDemo />

      {/* EvervaultCard Demo */}
      <div className="mt-12 flex gap-6 flex-wrap justify-center">
        {cardData.map((card, index) => (
          <div key={index} className="card w-full sm:w-[300px] h-[400px] mb-4">
            <EvervaultCard text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
