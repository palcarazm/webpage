class GitHubRepository {
  static #cache = new Map();
  static #TTL = 60*60*1000; // 1 hour in milliseconds

  static get(key) {
    const entry = this.#cache.get(key);
    if (!entry) return null;
    
    const now = Date.now();
    if (now - entry.timestamp > this.#TTL) {
      this.#cache.delete(key);
      return null;
    }
    
    return entry.data;
  }

  static set(key, data) {
    this.#cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  static clear() {
    this.#cache.clear();
  }
}

export default GitHubRepository;