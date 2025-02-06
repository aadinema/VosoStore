import React from 'react'
import Topbar from "./Navigation/Topbar/Topbar.jsx"
import Navigation from "./Navigation/Mainbar/Navigation.jsx"
import MainSection from "./MainSection/MainSection.jsx"
import CustomerServices from "./Customer/CustomerServices.jsx"
import Homepage from "./Homepage/Homepage.jsx"
import CardSlider from "./CardSlider/CardSlider.jsx"
import Progress from "./ProgressBar/Progress.jsx"
import Projects from "./Projects/Projects.jsx"
import ExpertTeam from "./ExpertTeam/ExpertTeam.jsx"
import CustomerFeedback from "./Feedback/CustomerFeedback.jsx"
import Blog from "./Blog/Blog.jsx"
import WorkTogether from "./WorkTogether/WorkTogether.jsx"
import Footer from "./Footer/Footer.jsx"

const Home = () => {
  return (
    <>
     <Topbar/>
      <Navigation/>
      <MainSection />
      <CustomerServices />
      <Homepage />
      <CardSlider />
      
      <Progress />
      <Projects />
      <ExpertTeam />
      <CustomerFeedback />
      <Blog />
      <WorkTogether />
      <Footer />
      
    </>
  )
}

export default Home
