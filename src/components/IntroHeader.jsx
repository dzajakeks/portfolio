import React, { useState, useRef, Fragment, useEffect} from 'react';
import Navigation from './Navigation';

const IntroHeader = ({blackRef}) => {
  const openNavRef = useRef();
  const switchRef = useRef();

  let [openMenu, setOpenMenu] = useState(false);


  const burgerRef = useRef();
  const ref = useRef();
  



  const switchHandler = e => {
    ref.current.classList.toggle('slide');
    if(ref.current.classList.contains('slide')) {
      blackRef.current.classList.add('blackMain');
      document.getElementById('nav__select').classList.add('hidden__nav');
      
    } else {
      blackRef.current.classList.remove('blackMain')
      blackRef.current.classList.add('delayDiv')
      document.getElementById('nav__select').classList.remove('hidden__nav');
    } 
  } 

  const openBurgerMenu = e => {
    if(!openMenu) {
      e.currentTarget.classList.add('open');
      openNavRef.current.classList.add('shownNav');      
      setOpenMenu(true);
    } else {
      e.currentTarget.classList.remove('open')
      openNavRef.current.classList.remove('shownNav');
      setOpenMenu(false);
    }
  }
  


  return (
    <Fragment>
      <header className='header'>
      <div  id="nav__select" onClick={openBurgerMenu} ref={burgerRef} className='burger__button-container hidden__nav'>
        <div className='burger__button-stripe'></div>
        <Navigation  openNavRef={openNavRef} burgerRef={burgerRef}  />
        </div>
        <h1 className='header--title'>Hello, <br /> I'm Marko</h1>
        <p className='header--self--typing'>Web Developer</p>

        <div id='switchh' className='explore__container'>
        <p className='header--explore'>Let's Explore
        <br />Flip The Switch To Begin</p>
        <button onClick={switchHandler} ref={switchRef} className='main__switch hidden-switch'>
          <div className='main__switch__container'>
            <span ref={ref} className='main__switch--top buttons slide'></span>
            <span className='main__switch--bottom  buttons'></span>
          </div>
          <span className='main__switch--switch'></span>
        </button>
        </div>
    </header>
    </Fragment>
  )
}

export default IntroHeader