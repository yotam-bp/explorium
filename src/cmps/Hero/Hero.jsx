import React from 'react'
import hero from '../../assets/img/hero.png'

const Hero = () => {


    return (
        <div className="hero flex justify-center align-center">
            <div className="left fs38">
                <h1>Nice & Easy way <br></br>
                    to view your data<br></br>
                    in A table </h1>
            </div>
            <div className="right">
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}
export default Hero;