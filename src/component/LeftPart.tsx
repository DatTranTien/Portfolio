
import desktop_logo1 from '../assets/img/logo/desktop-logo1.png';

export default function LeftPart() {
  return (
    <div className="arlo_tm_leftpart_wrap">
          <div className="leftpart_inner">
            <div className="logo_wrap">
              <a href="#"><img src={desktop_logo1} alt="desktop-logo" /></a>
            </div>
            <div className="menu_list_wrap">
              <ul className="anchor_nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Projects</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="#news">News</a></li> */}
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="leftpart_bottom">
              <div className="social_wrap">
                <ul>
                  <li><a href="https://www.facebook.com/profile.php?id=100017051825522"><i className="xcon-facebook"></i></a></li>
                </ul>
              </div>
            </div>
            <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
          </div>
        </div>
  )
}
