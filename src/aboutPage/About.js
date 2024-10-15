import TitleEffect from "../TitleEffect";
import { ReactComponent as AboutF } from './ABOUT f.svg';
import { ReactComponent as AboutB } from './ABOUTb.svg';
import { ReactComponent as Sharat } from './SharatAboutPage.svg';
import { ReactComponent as Artist } from './ArtistDef.svg';
import { ReactComponent as SharatAbout } from './SharatAbout.svg';

import './About.css';
import Footer from "../footer/Footer";

const About = () => {
  const title = { front: AboutF, back: AboutB, centre: Sharat, color: '#2E294E', top: -9.375, right: 15.625, display: 'none' };

  return (
    <div className="About-Page" style={{ backgroundColor: '#2E294E' }}>
      <TitleEffect title={title} />
      <div className="about-first">
        <div className="about-first-para">The older definition of what constituted a scientist wasn’t limited to a single discipline,
          but one that interested themselves in subjects across various studies, across physics, math, chemistry, and beyond.

          <br /><br />I have fancied a similar description for artists, not limited by their medium, but only by their minds. With that in mind, I would like to introduce myself as an Artist.</div>
        <div className="about-first-image">
          <Artist className="about-first-image-svg" />
        </div>
      </div>
      <div className="about about-second">
        <div className="about-second-image">          
          <SharatAbout className="about-second-image-svg" />
        </div>
        <div className="about-second-para">I am Sharat, a 23-year-old, with a taste for anything interesting that passes my way, a desire to make good stuff regardless of the medium, be it developer code, cells in an Excel Sheet, animating frames, playing around in Figma, moving a  circle in p5js, silly resumes and websites, and drawing when the mood strikes.

          <br /><br />My efforts are currently steeped in AI Safety on multiple fronts, from creating explainers, to running up experiments on Google Colab, to creating interfaces around LLMs.</div>
      </div>
      <div className="about">
        <div className="about-third-para">I have dabbled in various possible careers in my time at college ranging from content creation to UI interface design to software development to working on ML models. Despite the rapid fluctuations in career choice, I never regretted a single one, and thoroughly enjoyed each junction.

          <br /><br />My core philosophy is an attraction to individuals and organizations passionate about what they do and an enthusiasm that grabs them when you ask them to explain what is that they do. (Bonus points if it involves tackling a tricky problem, regardless of domain.)

          <br /><br />As mentioned above, I currently work in AI alignment, a field dedicated to developing safe advanced artificial intelligence, because I believe the risks there are imminent (and also because the problems to solve are too much fun!). </div>
      </div>
      <Footer color={'#7F74C6'} />
    </div>
  );
}

export default About;