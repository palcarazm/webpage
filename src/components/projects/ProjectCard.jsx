import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Badge, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch, faLink, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import GitHubService from '../../services/GithubService';
import ProjectBadges from './ProjectBadges';

function ProjectCard({ project }) {
  const [repoInfo, setRepoInfo] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function fetchRepoData() {
      try {
        const info = await GitHubService.getRepoInfo(project.username, project.repo);
        if (mounted && info) {
          setRepoInfo(info);
          
          const langs = await GitHubService.getLanguages(project.username, project.repo);
          if (mounted) {
            setLanguages(langs);
          }
        } else if (mounted) {
          setError(true);
        }
      } catch (err) {
        if (mounted) {
          setError(true);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchRepoData();
    
    return () => {
      mounted = false;
    };
  }, [project.username, project.repo]);

  if (loading) {
    return (
      <Card className="h-100 shadow-sm">
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </Card.Body>
      </Card>
    );
  }

  if (error || !repoInfo) {
    return (
      <Card className="h-100 shadow-sm">
        <Card.Body>
          <Card.Text className="text-muted text-center">
            Unable to load project data
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-primary"
          >
            {repoInfo.name}
          </a>
        </Card.Title>

        <div className="d-flex gap-3 mb-3 text-muted small">
          <div>
            <FontAwesomeIcon icon={faStar} className="me-1" />
            {repoInfo.stars.toLocaleString()}
          </div>
          <div>
            <FontAwesomeIcon icon={faCodeBranch} className="me-1" />
            {repoInfo.forks.toLocaleString()}
          </div>
          {repoInfo.license && (
            <div>
              <FontAwesomeIcon icon={faBalanceScale} className="me-1" />
              {repoInfo.license.spdxId || repoInfo.license.name}
            </div>
          )}
          {repoInfo.homepage && (
            <div>
              <a
                href={repoInfo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-muted"
              >
                <FontAwesomeIcon icon={faLink} className="me-1" />
                Homepage
              </a>
            </div>
          )}
        </div>

        <Card.Text className="text-muted small">
          {repoInfo.description || 'No description available'}
        </Card.Text>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {languages.map((lang) => (
            <Badge key={lang} bg="secondary" pill>
              {lang}
            </Badge>
          ))}
        </div>
        <ProjectBadges project={project} />
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    npmPackage: PropTypes.string,
    showNpmBadge: PropTypes.bool,
    showJsDelivrBadge: PropTypes.bool,
    showCoverallsBadge: PropTypes.bool,
    showSonarBadges: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;