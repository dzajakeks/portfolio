import React, { Fragment } from 'react'

const Projects = () => {
  return (
    <Fragment>
        <div className='mystery'>
            <div><p id="gotoProjects" className='mystery__name-section'>Mystery Projects</p></div>
            {/* start of card1 */}
              <div className="mystery__projects-flex">
                  <div className='mystery__projects'>
                    <div className='mystery__projects-card'>
                      <div className='mystery__projects-black'>
                        <a className="website-link" href="#">See Website</a>
                        <span className="question-mark">?</span>
                        <a className="code-link" href="#">See Code</a>
                      </div>
                      <div className='mystery__projects-text'>
                        <p className='mystery__projects-number'>Project #1</p>
                        <p className='mystery__projects-explanation'>Simple yet functional</p>
                      </div>
                    </div>
                  </div>
                              {/* end of card 1 */}
                  
                              {/* start of card 2 */}
                              <div className='mystery__projects'>
                    <div className='mystery__projects-card'>
                      <div className='mystery__projects-black'>
                        <a className="website-link" href="#"><span>See Website</span></a>
                        <span className="question-mark">?</span>
                        <a className="code-link" href="#"><span>See Code</span></a>
                      </div>
                      <div className='mystery__projects-text'>
                        <p className='mystery__projects-number'>Project #2</p>
                        <p className='mystery__projects-explanation'>All time classic</p>
                      </div>
                    </div>
                  </div>
                              {/* end of card 2 */}
                  
                              {/* start of card 3 */}
                              <div className='mystery__projects'>
                    <div className='mystery__projects-card'>
                      <div className='mystery__projects-black'>
                        <a className="website-link" href="#"><span>See Website</span></a>
                        <span className="question-mark">?</span>
                        <a className="code-link" href="#"><span>See Code</span></a>
                      </div>
                      <div className='mystery__projects-text'>
                        <p className='mystery__projects-number'>Project #3</p>
                        <p className='mystery__projects-explanation'>Have to make this one</p>
                      </div>
                    </div>
                  </div>
              </div>
            {/* end of card 3 */}
          </div>
    </Fragment>
  )
}

export default Projects