import React, { useEffect, useState } from 'react';
import './Home.css';
import { Header } from '../header/Header';
import JsonData from '../../data/data.json'
import SmoothScroll from 'smooth-scroll'
import { About } from './about';
import { Services } from './services';
import { Gallery } from './gallery';
import { Testimonials } from './testimonials';
import { Contact } from './contact';
import { Team } from './Team';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})
function Home() {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
      return (
        <div>

           <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />

            </div>
      );
}

export default Home
