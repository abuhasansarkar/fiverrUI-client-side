import React from 'react';
import './Featured.scss'
import searchIcon from '../../../public/img/search.png'
import featuredImg from '../../../public/img/man.png'

const Featured = () => {
     return (
          <div className='featured'>
               <div className="container">
                    <div className="left">
                         <h1>Find the perfect <i>freelancer</i> services for your business</h1>
                         <div className="search">
                              <img src={searchIcon} alt="icon" />
                              <input type="text" placeholder='Search Your Best Services...' />
                              <button>Search</button>
                         </div>
                         <div className="keyword">
                              <strong>Popular:</strong>
                              <button>Web Design</button>
                              <button>Web Development</button>
                              <button>WordPress</button>
                              <button>Graphics Design</button>
                              <button>AI Services</button>
                         </div>
                    </div>
                    <div className="right">
                         <img src={featuredImg} alt="img" />
                    </div>
               </div>
          </div>
     );
};

export default Featured;