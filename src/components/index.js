import React from 'react';
import {CategoryCard, Footer, Navbar, ProductCard, Slider} from './Home'
import Review from "./Home/Review";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <div>
                <CategoryCard />
            </div>
            <div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div>
                <Review />
            </div>
            <Footer />

        </div>
    );
};

export default Main;
