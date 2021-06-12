import React from 'react';
import { CategoryCard, Footer, ProductCard, Slider, Review } from "./partials";


const Home = () => {
    return (
        <div>
            <Slider/>
            <div className="container">
                <div>
                    <CategoryCard/>
                </div>
                <div>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <div>
                    <Review/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
