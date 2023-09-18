import React, { useContext } from "react";
import { ProfilePic } from "./ProfilePic";
import { ProfileExcerpt } from "./ProfileExcerpt";
import { LangContext, RssPlugin } from "../../plugins";
import { AppRoutes } from "../../router";
import { Link } from "react-router-dom";

export function ProfileHeader() {
  const { langState } = useContext(LangContext);
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <Link to={AppRoutes.home}>
        <ProfilePic />
      </Link>
      <div className="d-flex flex-column align-items-start ms-3">
        <h1 className="fs-4">Pablo Alcaraz Martinez</h1>
        <ProfileExcerpt lang={langState.lang} />
        <div className="d-flex flex-row justify-content-between align-items-center w-100">
          <RssPlugin />
        </div>
      </div>
    </div>
  );
}
