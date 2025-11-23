import React from 'react'
import HeroBanner from '../components/sections/HeroBanner'
import Features from '../components/sections/Features'
import AboutPreview from '../components/sections/AboutPreview'
import ScrollableCards from '../components/sections/ScrollableCards'
import BottomInfo from '../components/sections/BottomInfo'

const Home = ({ onNavigate }) => {
  return (
    <div id="home" className="page-content active">
      <HeroBanner />
      <Features />
      <AboutPreview />
      <ScrollableCards onNavigate={onNavigate} />
      <BottomInfo />
    </div>
  )
}

export default Home
