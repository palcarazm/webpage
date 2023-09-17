import React, { useContext } from "react";
import { CenterLayout } from "../layouts";
import { LangContext, LangPlugin, RssPlugin } from "../plugins";
import { ProfileCard } from "../components/profile";
import { AppNavBar } from "../components/navigation";

function HomePage() {
  const { langState } = useContext(LangContext);
  return (
    <CenterLayout>
      <div
        className="bg-dark-subtle mb-2 shadow"
        style={{ width: "fit-content", padding: "2rem" }}
      >
        <ProfileCard lang={langState.lang} />
        <RssPlugin />
      </div>
      <LangPlugin />
      <AppNavBar />
    </CenterLayout>
  );
}

export default HomePage;
