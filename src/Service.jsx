import React from 'react'
import Card from './Card'

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;