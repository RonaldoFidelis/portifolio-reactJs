import About from "./About";
import ProjectsContainer from "./ProjectsContainer";
import Tecnologies from "./Tecnologies";

import "../style/components/maincontent.sass";


const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Tecnologies />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;