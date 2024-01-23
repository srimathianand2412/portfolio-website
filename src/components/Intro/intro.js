import React from "react";
import './intro.css';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () =>{
    return(
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName"> Srimathi Anand,</span> <br/> CSE Student</span>
                <p className="introPara">I'm looking for opportunities to incorporate my skills and knowledge.<br /> I wish to work in a dynamic organisation that will contribute to my professional <br /> and personal growth while I contribute to the growth of the company <br /> as well as engage in opportunities to further the company's goals. </p>
                <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg" />Hire Me</button></Link>

            </div>
            
        </section>
    )
}

export default Intro;