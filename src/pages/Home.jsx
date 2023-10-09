import React from 'react';
import Banner from '../components/Banner/Banner';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';
import Gallery from '../components/gallery/Gallery';
import Welcome from '../components/welcome/Welcome';

const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <Welcome></Welcome>
            <Services></Services>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;