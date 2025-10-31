// Component responsible for handling GitHub user search functionality.
// Manages user input state and submission, triggers API calls through TanStack Query,
// and renders the UserCard component with fetched data.

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGithubUser } from "../../api/github";
import UserCard from "./UserCard";

// Main search component
const UserSearch = () => {
  // Local state for input and submitted username
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  // Query configuration for fetching GitHub user data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", submittedUsername],
    queryFn: () => fetchGithubUser(submittedUsername),
    enabled: !!submittedUsername, // Prevents fetch until a username is submitted
  });

  // Handles form submission and triggers the query
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedUsername(username.trim());
  };

  return (
    <section className="my-10">
      {/* Search form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-5 bg-neutral-0 py-2 pl-6 pr-3 rounded-2xl shadow-dropdown"
      >
        <img src="/images/icon-search.svg" alt="Search icon" />
        <input
          type="text"
          placeholder="Search GitHub username…"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full text-preset-3 text-neutral-700 placeholder-neutral-500 outline-none focus:outline-none"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>

      {/* Loading and error states */}
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}

      {/* Render user data card once fetched */}
      {data && <UserCard user={data} />}
    </section>
  );
};

export default UserSearch;
