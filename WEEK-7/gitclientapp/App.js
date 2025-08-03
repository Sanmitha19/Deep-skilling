import React, { useEffect, useState } from "react";
import GitClient from "./GitClient";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch repos for example user "techiesyed"
    GitClient.getRepositories("techiesyed")
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>GitHub Repositories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map((repo, index) => (
            <li key={index}>{repo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
