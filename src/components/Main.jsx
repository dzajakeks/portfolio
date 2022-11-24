import React, { Fragment } from 'react';
import About from './About';
import Skills from './Skills';
import ScrollToTop from "react-scroll-to-top";
import CVDownload from './CVDownload';
import Projects from './Projects';

const Main = ({blackRef}) => {
  
  return (
    <Fragment>
        <div ref={blackRef} className='blackMain'>
      <main>
        <div className='main'>
        <div><ScrollToTop className='to-top' smooth top={250}/></div>
      <Skills />
          <Projects />
          <About />
          <CVDownload />
          </div>
      </main>
    </div>
    </Fragment>
  )
}

export default Main