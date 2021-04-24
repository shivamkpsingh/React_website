import React from 'react'
// import { NavLink } from 'react-router-dom';
import web from '../src/images/img.svg'
import Common from './Common';
const Home = () => {
    return (
        <>
           <Common
            name="Grow Your business with"
            btnname="Get Started"
            imgsrc={web}
            visit="/service"
           />
        </>
    )
}

export default Home;