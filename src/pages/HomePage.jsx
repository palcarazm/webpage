import React, { useContext } from "react";
import { CenterLayout } from "../layouts";
import { LangContext, LangPlugin, RssPlugin } from "../plugins";
import { ProfileCard } from "../components/profile";

function HomePage() {
  const { langState } = useContext(LangContext);
  return (
    <CenterLayout>
      <ProfileCard lang={langState.lang} />
      <LangPlugin />
      <hr />
      <RssPlugin />
    </CenterLayout>
  );
}

export default HomePage;
