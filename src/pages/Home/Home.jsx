import React from 'react';
import Featured from '../../components/Featured/Featured';
import ServicesSlider from '../../components/ServicesSlider/ServicesSlider';
import TrastedLogo from '../../components/TrastedLogo/TrastedLogo';
import {servicesCards} from "../../../data"
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import FingerTips from '../../components/FingerTips/FingerTips';
import MarketPlaceCate from '../../components/MarketPlaceCate/MarketPlaceCate';
import FiverrBusiness from '../../components/FiverrBusiness/FiverrBusiness';

const Home = () => {
     return (
          <div>
               <Featured></Featured>
               <TrastedLogo></TrastedLogo>
               <ServicesSlider slidesToShow={5}>
                    {
                          servicesCards.map(card => <ServiceCard card={card} key={card.id}></ServiceCard>)
                    }
               </ServicesSlider>
               <FingerTips></FingerTips>.
               <MarketPlaceCate></MarketPlaceCate>
               <FiverrBusiness></FiverrBusiness>
               <h1>hell</h1>
          </div>
     );
};

export default Home;