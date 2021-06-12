import React, {Fragment} from 'react';

const MyComponent = () => {
    return (
        <Fragment>
            <div>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className={'carousel-inner'}>
                    <div className="carousel-item active">
                        <img className="d-block w-100"
                             src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107312566/original/4ef810792c139575d41e7decb7cdbd2fbd3e97ab/design-youtube-thumbnail-facebook-banners-ecommerce-ads.jpg"
                             alt="First slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, tempore?</h5>
                            <p>…</p>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107312566/original/4ef810792c139575d41e7decb7cdbd2fbd3e97ab/design-youtube-thumbnail-facebook-banners-ecommerce-ads.jpg"
                                 alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, doloribus!</h5>
                                <p>…</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/107312566/original/4ef810792c139575d41e7decb7cdbd2fbd3e97ab/design-youtube-thumbnail-facebook-banners-ecommerce-ads.jpg"
                                 alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, eius.</h5>
                                <p>…</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className={'carousel-control-prev'} href={'#carouselExampleIndicators'} role={'button'} data-slide={'prev'}>
                    <span className={'carousel-control-prev-icon'} aria-hidden={'true'} />
                    <span className={'sr-only'}>Previous</span>
                </a>
                <a className={'carousel-control-next'} href={'#carouselExampleIndicators'} role={'button'} data-slide={'next'}>
                    <span className={'carousel-control-next-icon'} aria-hidden={'true'} />
                    <span className={'sr-only'}>Next</span>
                </a>
            </div>
        </Fragment>
    );
};

export default MyComponent;
