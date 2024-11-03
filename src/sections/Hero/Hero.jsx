import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Profile.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kuwat
          <br />
          Subhi
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://github.com/kuwatsubhi78" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          With smile and passion for developing modern React web apps
        </p>
        <a href="#" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
