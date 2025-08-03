import axios from "axios";

class GitClient {
  // Fetch repositories for a given GitHub username
  static async getRepositories(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      // Return just the repo names
      return response.data.map(repo => repo.name);
    } catch (error) {
      console.error("Error fetching repos:", error);
      throw error;
    }
  }
}

export default GitClient;
