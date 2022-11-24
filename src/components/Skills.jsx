import React from 'react';
import { FaHtml5, FaCss3Alt, FaSass, FaNpm, FaReact, FaGitAlt} from 'react-icons/fa';
import { SiRedux, SiJavascript, SiTypescript } from 'react-icons/si';

const Skills = () => {
  

  return (
    <section className='skills'>
          <p id="gotoSkills" className='skills__introText'>Skills</p>
          <div className='skills__container'>
            <div className="skills__row">
              {/* another skill */}
              <div className="skills--skill oneskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <FaHtml5 className='html-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>HTML is the markup language for documents designed to be in browser. </p>
                  </div>
                </div>
              </div>
              {/* another skill */}
              <div className="skills--skill twoskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <FaCss3Alt className='css-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>Cascading Style Sheets is a style sheet language.</p>
                  </div>
                </div>
              </div>
              {/* another skill */}
              <div className="skills--skill threeskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <FaSass className='sass-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>Preprocessor scripting language that is compiled into Cascading Style Sheets.</p>
                  </div>
                </div>
              </div>
              {/* another skill */}
              {/* another skill */}
              <div className="skills--skill fourskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <p className='bem-icon'>BEM</p>
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>Naming convention that divides the user interface into reusable components.</p>
                  </div>
                </div>
              </div>
              {/* another skill */}
              {/*another skill row */}
              <div className="skills--skill fiveskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <FaNpm className='npm-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>It’s package manager for the JavaScript language.</p>
                  </div>
                </div>
              </div>
               {/*end of another skill row */}
            </div>
            <div className="skills__row"> 
              {/* another skill another row */}
              <div className="skills--skill sixskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <SiRedux className='redux-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>Redux is a predictable state container for JavaScript apps. <span className='still-learning'>(still learning)</span></p>
                  </div>
                </div>
              </div>
              {/* another skill */}
              <div className="skills--skill sevenskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <SiJavascript className='js-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>JavaScript is a programming language that drives the web.</p>
                  </div>
                </div>
              </div>
              {/* another skill */}
              {/* another skill */}
              <div className="skills--skill eightskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <FaReact className='react-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>A JavaScript library that is used for building user interfaces.</p>
                  </div>
                </div>
              </div>
              {/* another skill */}
              {/* another skill */}
              <div className="skills--skill nineskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <SiTypescript className='ts-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>OSS programming language developed and maintained by Microsoft. <span className='still-learning'>(still learning)</span></p>
                  </div>
                </div>
              </div>
              {/* another skill */}
              <div className="skills--skill tenskill allskill">
                <div className="icon__container">
                  <div className="icon">
                    <FaGitAlt className='git-icon' />
                  </div>
                </div>
                <div className="skills__text--container">
                  <div className="skills__text">
                    <p>Free & Open source distributed version control system.</p>
                  </div>
                </div>
              </div>
              {/* end of another skill */}
            </div>
          </div>
        </section>
  )
}

export default Skills