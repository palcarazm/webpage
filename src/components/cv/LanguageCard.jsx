import React from "react";
import PropTypes from "prop-types";
import { Language, maxLevel } from "../../assets/languages";
import { Col, ListGroup, ProgressBar, Row } from "react-bootstrap";

export function LanguageCard({ language }) {
  return (
    <ListGroup.Item>
      <Row className="align-items-center">
        <Col xs={3} sm={2}>
          {language.language}
        </Col>
        <Col xs>
          <ProgressBar
            animated
            now={language.level.value}
            label={language.level.label}
            max={maxLevel}
            className=""
          />
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

LanguageCard.propTypes = {
  language: PropTypes.instanceOf(Language).isRequired,
};
