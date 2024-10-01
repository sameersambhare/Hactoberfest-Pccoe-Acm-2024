import React, { useEffect, useState } from "react";
import axios from "axios";
import { LampDemo } from "../components/ui/lamp";
import { EvervaultCard } from "./ui/evervault-card"; // Import EvervaultCard
import "./Project.css";
import { Helmet } from "react-helmet-async";
// GitHub API base URL for the organization repos
const GITHUB_API_ORG_URL = "https://api.github.com/orgs/{orgName}/repos";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the list of repositories for the organization
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await axios.get(
          GITHUB_API_ORG_URL.replace(
            "{orgName}",
            "pccoe-acm-hacktoberfest-2023"
          ),
          {}
        );

        const repos = response.data;

        // Fetch PR and Fork data for each repository
        const fetchRepoDetails = async (repo) => {
          const pullRequestsResponse = await axios.get(
            `https://api.github.com/repos/${repo.full_name}/pulls`,
            {}
          );

          const mergedPRResponse = await axios.get(
            `https://api.github.com/repos/${repo.full_name}/pulls?state=closed`,
            {}
          );

          return {
            name: repo.name,
            forks: repo.forks_count,
            pullRequests: pullRequestsResponse.data.length,
            mergedPullRequests: mergedPRResponse.data.filter(
              (pr) => pr.merged_at !== null
            ).length,
          };
        };

        // Fetch details for all repositories concurrently
        const repoDetailsPromises = repos.map(fetchRepoDetails);
        const repoDetails = await Promise.all(repoDetailsPromises);

        setProjects(repoDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }
  console.log(projects);
  return (
    <>
      <Helmet>
        <title>PCCOE ACM Projects - Hacktoberfest 2024</title>
        <meta
          name="description"
          content="Explore PCCOE ACM's projects for Hacktoberfest 2024. Contribute to open-source, explore repositories, pull requests, forks, and merged PRs."
        />
        <meta
          name="keywords"
          content="Hacktoberfest 2024, PCCOE ACM, open-source projects, GitHub, repositories, pull requests, forks, merged PRs"
        />
        <meta name="author" content="PCCOE ACM" />
        <meta
          property="og:title"
          content="PCCOE ACM Projects - Hacktoberfest 2024"
        />
        <meta
          property="og:description"
          content="Explore and contribute to open-source projects hosted by PCCOE ACM for Hacktoberfest 2024. Check out GitHub repositories, pull requests, and more."
        />
        <meta property="og:image" content="/path-to-image.jpg" />{" "}
        {/* Add the correct path */}
        <meta
          property="og:url"
          content="https://pccoe-acm-hacktoberfest-2024.vercel.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PCCOE ACM Projects - Hacktoberfest 2024"
        />
        <meta
          name="twitter:description"
          content="Explore and contribute to open-source projects hosted by PCCOE ACM for Hacktoberfest 2024."
        />
        <meta name="twitter:image" content="/path-to-image.jpg" />{" "}
        {/* Add the correct path */}
        <link
          rel="canonical"
          href="https://pccoe-acm-hacktoberfest-2024.vercel.app/"
        />
      </Helmet>
      <div className="w-full min-h-screen relative flex flex-col justify-center items-center">
        {/* Lamp Demo */}
        <LampDemo />

        {/* Project Cards */}
        <div className="mt-12 flex gap-6 flex-wrap justify-center space-x-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card w-full sm:w-[300px] h-[400px] md:px-0 mb-4 px-[8vh]"
            >
              <EvervaultCard
                text={`Project: ${project.name}`}
                forks={`Forks: ${project.forks}`}
                pullRequests={`PRs: ${project.pullRequests}`}
                mergedPRs={`Merged PRs: ${project.mergedPullRequests}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
