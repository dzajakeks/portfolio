import React, { Fragment} from 'react';

const CVDownload = () => {
  return (
    <Fragment>
        <section className='cv__container'>
            <p id="gotoCV" className='cv__container-intro-text'>CV</p>
          <div className=''>
            <p className='cv__text'>Finally, Here Is My CV Which I've Made Using HTML / CSS 😊
            <br /><br />
            You Can Check It Here: <a target="_blank" className='cv__down-link'  href="https://dzajakeks.github.io/cv/">Marko's CV</a></p>
          </div>
        </section>
    </Fragment>
  )
}

export default CVDownload;


