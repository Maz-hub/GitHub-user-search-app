import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGithubUser } from "../../api/github";

const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users", submittedUsername],
    queryFn: () => fetchGithubUser(submittedUsername),
    enabled: !!submittedUsername,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedUsername(username.trim());
  };

  return (
    <section className="my-10">
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

      {isLoading && <p>Loading...</p>}
      {isError && <p>{error.message}</p>}

      {data && (
        <div>
          <img
            src={data.avatar_url}
            alt={data.name}
            className="rounded-full h-[117px]"
          />
          <h2>{data.name || data.login}</h2>
          <p>{`Joined ${data.created_at}`}</p>
          <p>{data.login}</p>
          <p>{data.bio}</p>
          <p>{`Repos ${data.public_repos}`}</p>
          <p>{`Followers ${data.followers}`}</p>
          <p>{`Following ${data.following}`}</p>
          <div className="flex">
            <img src="/images/icon-location.svg" alt={data.location} />
            <p>{data.location || "Not Available"}</p>
          </div>
          <div className="flex">
            <img src="/images/icon-website.svg" alt={data.blog} />
            <p>{data.blog || "Not Available"}</p>
          </div>
          <div className="flex">
            <img src="/images/icon-twitter.svg" alt={data.twitter_username} />
            <p>{data.twitter_username || "Not Available"}</p>
          </div>
          <div className="flex">
            <img src="/images/icon-company.svg" alt={data.company} />
            <p>{data.company || "Not Available"}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserSearch;
