import React from 'react'
import Header from '../components/Header'
import Events from '../components/Events'
import Associations from '../components/Associations'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Events />
            <Associations />
            <div>
                <img src="banner-end.jpg" alt="banner" />
            </div>
            <Footer />
        </>
    )
}

export default Home
