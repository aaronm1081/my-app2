import React from 'react';
import Header from '../partials/header';
import Footer from '../partials/footer';
import Main from '../partials/Main';
import Bulletins from '../partials/bulletins';
import '../../index.css';

export const Home = () => {

    return(

            <div className="container">

            <div >
            <Header/>
            </div>
            <div>
            <div>
            <Main/>
            </div>
            <div>
            <Bulletins/>
            </div>
            <div>
            <Footer/>
            </div>
            </div>
         </div>   
    );
};

export default Home;