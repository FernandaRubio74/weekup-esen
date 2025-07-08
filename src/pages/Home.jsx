import React from 'react'
import Header from '../components/Header'
import Events from '../components/Events'
import Associations from '../components/Associations'
import Agenda from '../components/Agenda'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <Events />
            <Associations />
            <Agenda />
            <Footer/>
        </>
    )
}

export default Home
