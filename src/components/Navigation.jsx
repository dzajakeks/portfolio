import React, { Fragment } from 'react';

const Navigation = ({openNavRef, burgerRef}) => {

    let closeNav = () => {
        openNavRef.current.classList.remove('shownNav');
        burgerRef.current.classList.remove('open')
    }

  return (
    <Fragment>
        <div ref={openNavRef} className='nav__container'>
            <div >
            <p className='nav__text'>Navigation</p>
            <ul className='nav__container-list'>
                <li><a onClick={closeNav} href="#gotoSkills">Skills</a></li>
                <li><a onClick={closeNav} href="#gotoProjects">Mystery Projects</a></li>
                <li><a onClick={closeNav} href="#gotoAbout">About</a></li>
                <li><a onClick={closeNav} href="#gotoCV">CV</a></li>
            </ul>
            </div>
        </div>
    </Fragment>
    
    )
}

export default Navigation