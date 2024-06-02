import styles from "./Hero.module.css"
import heroImg from "../../assets/hero-img.png"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import TwitterLight from "../../assets/twitter-light.svg"
import TwitterDark from "../../assets/twitter-dark.svg"
import linkedinLight from "../../assets/linkedin-light.svg"
import linkedinDark from "../../assets/linkedin-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import ResumeRohit from "../../assets/ResumeRohit.pdf"
import { useTheme } from "../../common/ThemeContext"
import { ReactTyped } from "react-typed";


function Hero() {

  const {theme,toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? TwitterLight : TwitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedInIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Picture of Rohit Yadav" />
        <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
         <h1>Rohit Vinod Yadav</h1>
         <h2>I am {""}
        <ReactTyped
          strings={["Full Stack Developer","Web Developer","UI-UX Designer","Backend Developer","Coder",]}
          typeSpeed={100}
          loop
          backSpeed={80}
          cursorChar='|'
          showCursor={true}
        /></h2>
         <span className={styles.spanner}>
          <a href="https://twitter.com/@Rohitvy_1204" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://www.linkedin.com/in/yrohitv12" target="_blank">
            <img src={linkedInIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/AggressiveCord1024" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          </span>
          <p className={styles.description}>With a passion for developing modern React web apps for commercial businesses.</p>

          <a href={ResumeRohit} download>
            <button className="hover">Resume</button>
          </a>
         
      </div>
    </section>
  )
}

export default Hero