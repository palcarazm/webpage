class Project {
  #username;
  #repo;
  #npmPackage;
  #showNpmBadge;
  #showJsDelivrBadge;
  #showCoverallsBadge;
  #showSonarBadges;

  constructor(
    username, 
    repo, 
    npmPackage = null, 
    showNpmBadge = false, 
    showJsDelivrBadge = false, 
    showCoverallsBadge = false, 
    showSonarBadges = false
  ) {
    this.#username = username;
    this.#repo = repo;
    this.#npmPackage = npmPackage;
    this.#showNpmBadge = showNpmBadge;
    this.#showJsDelivrBadge = showJsDelivrBadge;
    this.#showCoverallsBadge = showCoverallsBadge;
    this.#showSonarBadges = showSonarBadges;
  }

  get username() {
    return this.#username;
  }
  
  get repo() {
    return this.#repo;
  }

  get npmPackage() {
    return this.#npmPackage;
  }

  get showNpmBadge() {
    return this.#showNpmBadge;
  }

  get showJsDelivrBadge() {
    return this.#showJsDelivrBadge;
  }

  get showCoverallsBadge() {
    return this.#showCoverallsBadge;
  }

  get showSonarBadges() {
    return this.#showSonarBadges;
  }

  get link() {
    return `https://github.com/${this.#username}/${this.#repo}`;
  }
}

export default Project;