import React, { useContext } from "react";
import { CenterLayout } from "../layouts";
import { LangContext, LangPlugin, RssPlugin } from "../plugins";
import { ProfileCard } from "../components/profile";
import { AppNavBar } from "../components/navigation";

function HomePage() {
  const { langState } = useContext(LangContext);
  return (
    <CenterLayout>
      <ProfileCard lang={langState.lang} />
      <LangPlugin />
      <hr />
      <RssPlugin />
      <hr />
      <AppNavBar />
    </CenterLayout>
  );
}

export default HomePage;
