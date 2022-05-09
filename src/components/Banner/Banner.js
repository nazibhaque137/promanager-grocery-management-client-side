import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="banner-container">

            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1229.jpg?t=st=1652040720~exp=1652041320~hmac=238a635e31f141ada50f569d3e0af13ff9c7a97081452e19fa5f8ac9358e74ad"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Your Ultimate place to buy groceries</h3>
                        <p>ProManager Grocery Management System gives you amazing solutions to manage groceries</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1232.jpg?t=st=1652040720~exp=1652041320~hmac=c43055a534ed403d1e0e636a797a3d6de65fbb7053ea042e4ad525e640ac5d16"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ensures a healthy and happy life</h3>
                        <p>This place ensures all kinds of groceries at the freshest form</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src="https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?t=st=1652040720~exp=1652041320~hmac=44705c72dea45e646a307c92178e2d15b093bb08b80d720030dfcb576f3b4ea6"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Life is wonderful when you shop with us</h3>
                        <p>
                            Feel free to use our service anytime!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;