import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Brand from './components/brand/Brand';
import WhatGPT3 from './containers/whatGPT-3/WhatGPT3';
import Features from './containers/features/Features';
import Possibility from './containers/possibility/Possibility';
import CTA from './components/cta/CTA';
import Blogs from './containers/blogs/Blogs';
import Footer from './containers/footer/Footer';
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar></Navbar>
                <Header></Header>
            </div>
<Brand></Brand>
<WhatGPT3></WhatGPT3>
<Features></Features>
<Possibility></Possibility>
     <CTA></CTA>
     <Blogs></Blogs>
     <Footer></Footer>  
        </div>
    );
};

export default App;