import React from "react";
import './skills.css';
import MLprojects from '../../assets/ui-design.png';
import WebDevelopment from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () =>{
    return(
        <section id='skills'>
            <span className="skillTitle">Projects</span>
            <span className="skillDesc">I'm a skilled and passionate web developer with a knowledge in HTML&CSS, Javascript and also done projects realted to machine learning domain. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={MLprojects}alt="MLprojects" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>PCOS Disease Prediction</h2>
                        <p>To detect PCOS disease using Machine learning algorithms like Decision tree, Random forest and Linear Regression.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDevelopment} alt="WebDevelopment" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Portfolio Website </h2>
                        <p>Created a Portfolio website using HTML,CSS and Reactjs.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Object Detection using ML</h2>
                        <p>To detect different objects like traffic signals, bikes, cars using YOLOv4 algorithm.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default Skills;