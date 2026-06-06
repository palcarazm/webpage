import React from 'react';
import PropTypes from 'prop-types';
import ShieldsIoService from '../../services/ShieldsIoService';

function ProjectBadges({ project }) {
  const badges = [];

  if (project.showNpmBadge && project.npmPackage) {
    const npm = ShieldsIoService.getNpmDownloadsBadge(project.npmPackage);
    badges.push(npm);
  }

  if (project.showJsDelivrBadge && project.npmPackage) {
    const jsdelivr = ShieldsIoService.getJsDelivrHitsBadge(project.npmPackage);
    badges.push(jsdelivr);
  }

  if (project.showCoverallsBadge) {
    const coveralls = ShieldsIoService.getCoverallsBadge(project.username, project.repo);
    badges.push(coveralls);
  }

  if (project.showSonarBadges) {
    const sonarBadges = ShieldsIoService.getSonarBadges(project.username, project.repo);
    badges.push(...sonarBadges);
  }

  if (badges.length === 0) {
    return null;
  }

  return (
    <div className="d-flex flex-wrap gap-2 mt-2">
      {badges.map((badge) => (
        <a
          key={badge.type}
          href={badge.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <img
            src={badge.url}
            alt={badge.label}
            style={{ height: '20px' }}
          />
        </a>
      ))}
    </div>
  );
}

ProjectBadges.propTypes = {
  project: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    npmPackage: PropTypes.string,
    showNpmBadge: PropTypes.bool,
    showJsDelivrBadge: PropTypes.bool,
    showCoverallsBadge: PropTypes.bool,
    showSonarBadges: PropTypes.bool,
  }).isRequired,
};

export default ProjectBadges;