import React, {Fragment} from 'react';
import { CategoryCard, ProductCard, Slider, Review } from "./partials";


const Home = () => {
    return (
        <Fragment>
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
        </Fragment>
    );
};

export default Home;
