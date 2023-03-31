import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

import facebook from '../../../public/img/facebook.png';
import twitter from '../../../public/img/twitter.png';
import linkedin from '../../../public/img/linkedin.png';
import pinterest from '../../../public/img/pinterest.png';
import instagram from '../../../public/img/instagram.png';
import language from '../../../public/img/language.png';
import dolor from '../../../public/img/coin.png';


const Footer = () => {
     return (
          <div className='footer'>
               <div className="container">
                    <div className="footer-nav">
                         <ul className="nav">
                              <strong>Categories</strong>
                              <hr />
                              <li><Link className='link'>Graphics & Desing</Link></li>
                              <li><Link className='link'>Digital Marketing</Link></li>
                              <li><Link className='link'>Writing & Translation</Link></li>
                              <li><Link className='link'>Video & Animation</Link></li>
                              <li><Link className='link'>Music & Audio</Link></li>
                              <li><Link className='link'>Programming & Tech</Link></li>
                              <li><Link className='link'>Data</Link></li>
                              <li><Link className='link'>Business</Link></li>
                              <li><Link className='link'>Lifestyle</Link></li>
                              <li><Link className='link'>Photography</Link></li>
                              <li><Link className='link'>Sitemap</Link></li>
                         </ul>
                         <ul className="nav">
                              <strong>About</strong>
                              <hr />
                              <li><Link className='link'>Careers</Link></li>
                              <li><Link className='link'>Press & News</Link></li>
                              <li><Link className='link'>Partnerships</Link></li>
                              <li><Link className='link'>Privacy Policy</Link></li>
                              <li><Link className='link'>Terms of Services</Link></li>
                              <li><Link className='link'>Interllectual Property Claims</Link></li>
                              <li><Link className='link'>Investor Relations</Link></li>
                         </ul>
                         <ul className="nav">
                              <strong>Support</strong>
                              <hr />
                              <li><Link className='link'>Help & Support</Link></li>
                              <li><Link className='link'>Trust & Safety</Link></li>
                              <li><Link className='link'>Selling on Fiverr</Link></li>
                              <li><Link className='link'>Buying on Fiverr</Link></li>
                         </ul>
                         <ul className="nav">
                              <strong>Coummnity</strong>
                              <hr />
                              <li><Link className='link'>Customer Success Stories</Link></li>
                              <li><Link className='link'>Community Hub</Link></li>
                              <li><Link className='link'>Frum</Link></li>
                              <li><Link className='link'>Events</Link></li>
                              <li><Link className='link'>Blogs</Link></li>
                              <li><Link className='link'>Influencers</Link></li>
                              <li><Link className='link'>Affiliates</Link></li>
                              <li><Link className='link'>PotCast</Link></li>
                              <li><Link className='link'>Invite a Friend</Link></li>
                              <li><Link className='link'>Become a Seller</Link></li>
                              <li><Link className='link'>Community Standerd</Link></li>
                         </ul>
                         <ul className="nav">
                              <strong>More From Fiverr</strong>
                              <hr />
                              <li><Link className='link'>Fiverr Business</Link></li>
                              <li><Link className='link'>Fiverr Pro</Link></li>
                              <li><Link className='link'>Fiverr Logo Maker</Link></li>
                              <li><Link className='link'>Fiverr Gides</Link></li>
                              <li><Link className='link'>Get Inspired</Link></li>
                              <li><Link className='link'>Fiverr Select</Link></li>
                              <li><Link className='link'>Fiverr Workspace</Link></li>
                              <li><Link className='link'>Learn</Link></li>
                              <li><Link className='link'>Working Not Working</Link></li>
                         </ul>
                    </div>
                    <hr />
                    <div className="footer-bottom">
                         <div className="left">
                              <span><Link className='link'>fiverr.</Link> © Fiverr International Ltd. 2023</span>
                         </div>
                         <div className="right">
                              <div className="sociel">
                                   <Link><img src={facebook} alt="icon" /></Link>
                                   <Link><img src={twitter} alt="icon" /></Link>
                                   <Link><img src={linkedin} alt="icon" /></Link>
                                   <Link><img src={instagram} alt="icon" /></Link>
                                   <Link><img src={pinterest} alt="icon" /></Link>
                              </div>
                              <div className="cuntry-info">
                                   <strong><img src={language} alt="language" /> English</strong>
                                   <strong><img src={dolor} alt="language" /> USD</strong>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;




