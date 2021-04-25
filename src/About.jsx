
import React from 'react'
import Common from './Common'
import web from '../src/images/op.svg'

const About = () => {
    return (
        <>
            <Common
                name="Welcome To About Page"
                btnname="Contact Now"
                imgsrc={web}
                visit="/contact"
            />
        </>
    )
}

export default About;