import GithubRepository from '../repositories/GithubRepository';

class GitHubService {
  static #baseUrl = 'https://api.github.com/repos';
  static #headers = {
    'Accept': 'application/vnd.github.v3+json',
  };

  static async getRepoInfo(username, repo) {
    const cacheKey = `${username}/${repo}`;
    const cached = GithubRepository.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(
        `${this.#baseUrl}/${username}/${repo}`,
        { headers: this.#headers }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      
      const repoInfo = {
        name: data.name,
        fullName: data.full_name,
        description: data.description,
        stars: data.stargazers_count,
        forks: data.forks_count,
        language: data.language,
        languages: data.language ? [data.language] : [],
        homepage: data.homepage,
        updatedAt: data.updated_at,
        license: data.license ? {
          name: data.license.name,
          spdxId: data.license.spdx_id,
          url: data.license.url,
        } : null,
      };

      GithubRepository.set(cacheKey, repoInfo);
      return repoInfo;
    } catch (error) {
      console.error(`Failed to fetch repo info for ${username}/${repo}:`, error);
      return null;
    }
  }

  static async getLanguages(username, repo) {
    const cacheKey = `languages/${username}/${repo}`;
    const cached = GithubRepository.get(cacheKey);
    
    if (cached) {
      return cached;
    }

    try {
      const response = await fetch(
        `${this.#baseUrl}/${username}/${repo}/languages`,
        { headers: this.#headers }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      const languages = Object.keys(data).slice(0, 3);
      
      GithubRepository.set(cacheKey, languages);
      return languages;
    } catch (error) {
      console.error(`Failed to fetch languages for ${username}/${repo}:`, error);
      return [];
    }
  }
}

export default GitHubService;