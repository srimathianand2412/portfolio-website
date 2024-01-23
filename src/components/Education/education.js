import React from "react";
import './education.css';

const Education = () =>{
    return(
        <section id='education'>
            <span className="educationTitle">Education</span>
            <div className="educationBars">
               <div className="educationBar">
               <div className="educationBarText"> 
               <h2>SRM Valliammai Engineering College</h2>
               <p> B.E (CSE)</p>
               <p> CGPA : 8.77</p>
               <p> YEAR : 2020-2024</p>
               </div>
               </div>
            <div className="educationBar">
                <div className="educationBarText">
                    <h2> Prince Matriculation Higher Secondary School</h2>
                    <p> HSC </p>
                    <p> Percentage : 75.8</p>
                    <p>YEAR : 2019-2020</p>
                </div>
            </div>
            <div className="educationBar">
                <div className="educationBarText">
                    <h2> Prince Matriculation Higher Secondary School</h2>
                    <p> SSLC</p>
                    <p> Percentage : 91.8</p>
                    <p> YEAR : 2017-2018</p>
                </div>
            </div>
            </div>
        </section>


    );
    
}
export default Education;