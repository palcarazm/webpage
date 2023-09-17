import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LangContext, Langs } from "../../plugins";
import { Button } from "react-bootstrap";

function getTranslation(lang) {
  switch (lang) {
    case Langs.fr:
      return "Charger plus";
    case Langs.es:
    default:
      return "Mostrar más";
  }
}

function MoreButton({ loadMore, hasMore }) {
  const { langState } = useContext(LangContext);

  return (
    <Button
      variant="outline-primary"
      onClick={loadMore}
      disabled={!hasMore}
      size="sm"
      className="text-uppercase"
    >
      {getTranslation(langState.lang)}
    </Button>
  );
}

MoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default MoreButton;
