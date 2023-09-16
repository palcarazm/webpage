class Project {
  #username;
  #repo;

  constructor(username, repo) {
    this.#username = username;
    this.#repo = repo;
  }

  get username() {
    return this.#username;
  }
  get repo() {
    return this.#repo;
  }

  get link() {
    return `https://github.com/${this.#username}/${this.#repo}`;
  }

  #imgUrl(theme) {
    return `https://github-readme-stats.vercel.app/api/pin/?username=${
      this.#username
    }&repo=${this.#repo}&border_radius=10&show_owner=true&theme=${theme}`;
  }
  get lightImgUrl() {
    return this.#imgUrl("light");
  }
  get darkImgUrl() {
    return this.#imgUrl("dark");
  }
}

export default Project;
