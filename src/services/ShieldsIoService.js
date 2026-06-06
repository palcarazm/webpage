class ShieldsIoService {
  static getNpmDownloadsBadge(packageName) {
    return {
      type : "npm-downloads",
      url: `https://img.shields.io/npm/dm/${packageName}?logo=npm`,
      link: `https://www.npmjs.com/package/${packageName}`,
      label: "npm downloads",
    };
  }

  static getJsDelivrHitsBadge(packageName) {
    return {
      type : "jsdelivr-hits",
      url: `https://img.shields.io/jsdelivr/npm/hm/${packageName}?label=hits&logo=jsdelivr&logoColor=white`,
      link: `https://www.jsdelivr.com/package/npm/${packageName}`,
      label: "jsDelivr hits",
    };
  }

  static getCoverallsBadge(username, repo) {
    return {
      type : "coveralls",
      url: `https://img.shields.io/coverallsCoverage/github/${username}/${repo}?logo=coveralls`,
      link: `https://coveralls.io/github/${username}/${repo}`,
      label: "coverage",
    };
  }

  static getSonarBadges(username, repo) {
    return [
      {
        type: "sonar-maintainability",
        url: `https://sonarcloud.io/api/project_badges/measure?project=${username}_${repo}&metric=sqale_rating`,
        link: `https://sonarcloud.io/summary/new_code?id=${username}_${repo}`,
        label: "maintainability",
      },
      {
        type: "sonar-reliability",
        url: `https://sonarcloud.io/api/project_badges/measure?project=${username}_${repo}&metric=reliability_rating`,
        link: `https://sonarcloud.io/summary/new_code?id=${username}_${repo}`,
        label: "reliability",
      },
      {
        type: "sonar-security",
        url: `https://sonarcloud.io/api/project_badges/measure?project=${username}_${repo}&metric=security_rating`,
        link: `https://sonarcloud.io/summary/new_code?id=${username}_${repo}`,
        label: "security",
      },
    ];
  }
}
export default ShieldsIoService;
