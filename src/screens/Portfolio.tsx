import React from 'react'
import Preloader from '../component/Preloader'
import LeftPart from '../component/LeftPart'
import RightPart from '../component/RightPart'
import Menu from '../component/mobile/Menu'

export default function Portfolio() {
  return (
    <>
    <div className="arlo_tm_wrapper_all">

      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close"><a href="#"></a></span>
      </div>

      {/* <!-- PRELOADER --> */}
      <Preloader/>
      {/* <!-- /PRELOADER --> */}

      {/* <!-- MOBILE MENU --> */}
      <Menu/>
      {/* <!-- /MOBILE MENU --> */}

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">

        {/* <!-- LEFTPART --> */}
        <LeftPart/>
        {/* <!-- /LEFTPART --> */}

        {/* <!-- RIGHTPART --> */}
        <RightPart/>
        {/* <!-- /RIGHTPART --> */}

        <a className="arlo_tm_totop" href="#"></a>

      </div>
    </div>
    </>
  )
}