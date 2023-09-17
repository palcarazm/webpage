import React, { useContext, useState } from "react";
import { WorkExperienceService } from "../../assets/work-experience";
import { LangContext } from "../../plugins";
import { WorkExperienceCard } from "./WorkExperienceCard";
import MoreButton from "../global/MoreButton";

const options = { initial: 2, increment: 2 };

export function WorkExperienceList() {
  const { langState } = useContext(LangContext);
  const [numResults, setNumResults] = useState(options.initial);
  function loadMore() {
    setNumResults((c) => c + options.increment);
  }

  const workExperiences = WorkExperienceService.get(langState.lang, numResults);

  return (
    <>
      {workExperiences.data.map((workExperience) => (
        <WorkExperienceCard
          key={workExperience.key}
          workExperience={workExperience}
        />
      ))}
      {numResults < workExperiences.size && (
        <div className="d-flex justify-content-center">
          <MoreButton
            loadMore={loadMore}
            hasMore={numResults < workExperiences.size}
          />
        </div>
      )}
    </>
  );
}
