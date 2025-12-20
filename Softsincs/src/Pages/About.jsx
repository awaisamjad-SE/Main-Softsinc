import SEO from '../components/common/SEO';
import Hero2 from "../components/sections/Hero2";
import bg1 from "../assets/Images/background.jpg";
import AboutTimline from '../components/sections/AboutTimeline'; 
import Testimonials from '../components/sections/Testimonials';
import PartnersSection from '../components/sections/PartnersSection'; // Assuming 
import Leadership from '../components/sections/Leadership'; 
const About = () => {
  return (
    <>
      <SEO 
        title="About Us - Softsincs | Expert Software Development Team"
        description="Learn about Softsincs, a passionate team of software developers dedicated to delivering excellence. Discover our mission, values, and the expertise that drives innovation in every project."
        keywords="about softsincs, software development team, company mission, technology experts, software house team, our story, company values"
        url="https://softsincs.com/about"
      />
      <Hero2
        smallTitle="About Us"
        title="Driven by Passion, Defined by Excellence"
        description="At Softsinc, we specialize in transforming businesses"
        buttonText="Get in Touch"
        buttonLink="/contact"
        backgroundImage={bg1}
      />

<AboutTimline/>
<Leadership/>
<Testimonials/>
<PartnersSection/>

    </>
  );
};

export default About;
