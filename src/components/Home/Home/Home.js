import React from 'react';
import Feedback from '../FeedBack/Feedback';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Partners></Partners>
            <Services></Services>
            <Slider></Slider>
            <Feedback></Feedback>
            <Form></Form>
        </div>
    );
};

export default Home;