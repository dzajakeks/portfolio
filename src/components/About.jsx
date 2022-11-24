import React, { Fragment, useEffect, useRef, useState }  from 'react';
import me from '../../photos/me.png';
import { motion } from 'framer-motion';
import reaction from '../../photos/gj.gif';
import { FaGithub } from 'react-icons/fa'


const About = () => {
    const mouseRef = useRef();
    const divRef = useRef();

    const [mousePosition, setMousePosition] = useState({
        x: -10,
        y: -10
    })

    const cursorInside = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
        mouseRef.current.classList.add('cursor');
        document.body.style = 'overflow-y: hidden';
    }

    const mouseLeave = () => {
        mouseRef.current.classList.remove('cursor')
        document.body.style = 'overflow-y: auto';
        document.body.style = 'overflow-x: hidden';
    }

    const continueScrollOnClick = () => {
        document.body.style = 'overflow-y: auto';
     }


    const variants = {
        default: {
            x: mousePosition.x -16,
            y: mousePosition.y -16
        }
    }

  return (
    <Fragment>
        <section style={{padding: '10em 0'}} className='about'>
            <p className='about__intro__text' id='gotoAbout'>About</p>
            <div className='about__wrapper'>
                <div id='cursorContainer' className="about__wrapper-text-side">
                    <motion.div id='addCursor' ref={mouseRef} className="cursor"
                    variants={variants}
                    animate="default"></motion.div>
                    <div onClick={continueScrollOnClick} ref={divRef} onMouseMove={cursorInside} onMouseLeave={mouseLeave} className='about-text-container'>
                        <p className='about__wrapper-text'>Greetings! My Name Is Marko Popović And I Am A Self-Taught Front End Developer From Serbia. One Specific Thing About My Work Is That I Try To Make It Different Than The Rest Using My Ideas.
                        <br /> Trying To Stand Out Using Simple "Tricks" To Give <img className='react-gif' src={reaction} alt="reaction gif"/> Effect.
                        <br /><br /> Making Websites Is Addictive, I Enjoy Getting Serotonin From Working Code After Spending Some Time 😅. Overall Friendly Person.
                        <br /><br />
                        If You Like What You See (No Pun Intended), Contact Me On My Email: <br /><span className='mail-contact'>mare17p@gmail.com</span>
                        <br /><br />And Here Is My GitHub Profile: <br /><a href="https://github.com/dzajakeks" target="_blank"><FaGithub className='github-link' /></a></p>
                    </div>
                </div>
                <div className="about__wrapper-img-side">
                    <div className="about__wrapper-img">
                        <motion.img className='markoimg'
                        drag
                        dragConstraints={{top:0, left:0, right:0, bottom:0}}

                        src={me} alt="myself" />
                        <p className='secret-message'>hello (=</p>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default About


