import { useState } from "react";
import Layout from "./components/Layout";
import type { NavItem } from "./types/navigation";
import Profile from "./components/Profile";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState<NavItem>("Profile");

  const handleTabClick = (tab: NavItem) => {
    setActiveTab(tab);
  };

  return (
    <Layout handleTabClick={handleTabClick} title={activeTab}>
      {activeTab === "Profile" && <Profile />}
      {activeTab === "About" && <About />}
      {activeTab === "Skill" && <Skill />}
      {activeTab === "Contact" && <Contact />}
    </Layout>
  );
};

export default App;