import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DelliveryMeals from '../Assets/delivery-image.png';
import homeImageFirst from "../Assets/choose-image.png"
import homeImageSecond from "../Assets/delivery-image.png"
import homeImageThird from "../Assets/pick-meals-image.png"
const Work = () => {
  return <div className="work-section-wrapper">
    <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt 
            magna non et elit. Dolor  turpis molestie dui
            magnis facilisis at fringilla quam.
        </p>
    </div>
    <div className="work-section-bottom">
            <div className="work-section-info">
                <div className="info-boxes-img-container">
                    <img src={homeImageThird} alt="" />
                </div>
                <h2>Pick Meals</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
            </div>
            <div className="work-section-info">
                <div className="info-boxes-img-container">
                    <img src={homeImageFirst} alt="" />
                </div>
                <h2>Choose How Often</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et </p>
            </div>
            <div className="work-section-info">
                <div className="info-boxes-img-container">
                    <img src={homeImageSecond} alt="" />
                </div>
                <h2>Fast Deliveries</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>
            </div>
    </div>
  </div>

}

export default Work
