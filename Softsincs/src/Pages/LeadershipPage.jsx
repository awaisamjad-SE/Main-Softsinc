import React from 'react'
import AnimatedBackground from '../components/common/AnimatedBackground'
import Hero2 from '../components/sections/Hero2'
import bgLeadership from '../assets/Images/background.jpg'
import Leadership from '../components/sections/Leadership'
function LeadershipPage() {
  return (
    <div>
      <AnimatedBackground />
            <Hero2
        smallTitle="Leadership"
        title="Let’s Build Something Great Together"
        description="From idea to execution, discover how we turn your vision into scalable digital solutions through our refined process."
        buttonText="Start a Project"
        buttonLink="/contact-form"
        backgroundImage={bgLeadership}
      />
<Leadership />
    </div>
  )
}

export default LeadershipPage
