import React from 'react';
import { CategoryCard, ProductCard, Slider, Review } from "./partials";


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
        </div>
    );
};

export default Home;
