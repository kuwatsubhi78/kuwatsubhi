import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/kuwatsubhi78/contoh2"
          h3="SiSFO"
          p="Sistem Informasi Sekolah"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/kuwatsubhi78/contoh2"
          h3="SISFO"
          p="Sistem Informasi Sekolah"
        />
      </div>
    </section>
  );
}

export default Projects;
