
import Hero2 from "../Components/layout/Hero2";
import bg1 from "../assets/Images/background.jpg";
import AboutTimline from '../Components/layout/AboutTimeline'; 
import Testimonials from '../Components/layout/hero/Testimonials';
import PartnersSection from '../Components/layout/PartnersSection'; // Assuming 
import Leadership from '../Components/layout/Leadership'; 
const About = () => {
  return (
    <>
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
