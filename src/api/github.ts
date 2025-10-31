// Define a helper function for fetching GitHub user data from the public API.
// The function receives a username and returns the user profile JSON.
// Throws an error if the response is not successful.

export const fetchGithubUser = async (username: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_GITHUB_API_URL}/users/${username}`
  );

  // Handle non-200 HTTP responses with a clear error message
  if (!res.ok) throw new Error("No results");

  // Parse and return the JSON response
  const data = await res.json();
  return data;
};
