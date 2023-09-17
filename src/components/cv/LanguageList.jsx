import React, { useContext } from "react";
import { LanguageService } from "../../assets/languages";
import { LangContext } from "../../plugins";
import { LanguageCard } from "./LanguageCard";
import { ListGroup } from "react-bootstrap";

export function LanguageList() {
  const { langState } = useContext(LangContext);

  const languages = LanguageService.getAll(langState.lang);

  return (
    <ListGroup
      variant="flush"
      className="mx-2"
      style={{ "--bs-list-group-bg": "transparent" }}
    >
      {languages.data.map((language) => (
        <LanguageCard key={language.key} language={language} />
      ))}
    </ListGroup>
  );
}
