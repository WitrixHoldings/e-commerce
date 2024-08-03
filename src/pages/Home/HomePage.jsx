import React from "react";
import "../Home/home.css";
import img_1 from "../../assets/img/3.jpg";
import img_2 from "../../assets/img/2.jpg"
import img_3 from "../../assets/img/1.jpg"
import banner1 from '../../assets/img/banner1.png'
import banner2 from '../../assets/img/banner2.png'
import banner3 from '../../assets/img/banner3.png'
import Trend_banner from '../../assets/img/trend-banner.png'
import category1 from '../../assets/img/banner-1.png'
import category2 from '../../assets/img/4.jpg'
import All_in_one from '../../assets/img/banner-2.png'
import Summer_banner from '../../assets/img/summer-banner.png'


const HomePage = () => {
  return (
    <>
        <section class="offers">
            <div class="container">

                <div class="product-grid">
                     {/* Product Item  */}
                    <div class="product-item">
                        <div class="product-img">
                            <img src={img_3} alt="" />
                        </div>
                        <div class="product-details">
                            <h2>hurry up! offer ends in:</h2>
                            <div class="offer-count-down">
                                <div class="days">
                                    <h2>00</h2>
                                    <h3>Days</h3>
                                </div>
                                <div class="hours">
                                    <h2>00</h2>
                                    <h3>Hours</h3>
                                </div>
                                <div class="min">
                                    <h2>00</h2>
                                    <h3>Min</h3>
                                </div>
                                <div class="sec">
                                    <h2>00</h2>
                                    <h3>Sec</h3>
                                </div>
                            </div>
                            <h3>studio design</h3>
                            <h4>Enjoy the rest t-shirt</h4>
                            <p>$25.00</p>
                            <button>Add to Cart</button>
                        </div>

                    </div>

                    <div class="product-item">
                        <div class="product-img">
                            <img src={img_2} alt="" />
                        </div>
                        <div class="product-details">
                            <h2>hurry up! offer ends in:</h2>
                            <div class="offer-count-down">
                                <div class="days">
                                    <h2>00</h2>
                                    <h3>Days</h3>
                                </div>
                                <div class="hours">
                                    <h2>00</h2>
                                    <h3>Hours</h3>
                                </div>
                                <div class="min">
                                    <h2>00</h2>
                                    <h3>Min</h3>
                                </div>
                                <div class="sec">
                                    <h2>00</h2>
                                    <h3>Sec</h3>
                                </div>
                            </div>
                            <h3>studio design</h3>
                            <h4>Enjoy the rest t-shirt</h4>
                            <p>$25.00</p>
                            <button>Add to Cart</button>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        {/* flash sale Section */}
        <section class="flash-sale">
            <div class="container">
                <div class="offer-grid">
                    <div class="offer-type">
                        <div class="offer-name">
                            <h2>Trend Fashions</h2>
                        </div>
                        <div class="offer-count-down">
                            <div class="days">
                                <h2>00</h2>
                                <h3>Days</h3>
                            </div>
                            <div class="hours">
                                <h2>00</h2>
                                <h3>Hours</h3>
                            </div>
                            <div class="min">
                                <h2>00</h2>
                                <h3>Min</h3>
                            </div>
                            <div class="sec">
                                <h2>00</h2>
                                <h3>Sec</h3>
                            </div>
                        </div>
                    </div>

                    <div class="flash-items">
                        <div class="item1">
                            <div class="item1_image">
                                <img src={img_1} alt="" />
                            </div>
                            <div class="item1_price">
                                <p>$25.00</p>
                            </div>
                        </div>
                        <div class="item2">
                            <div class="item2_image">
                                <img src={img_2} alt="" />
                            </div>
                            <div class="item2_price">
                                <p>$25.00</p>
                            </div>
                        </div>
                        <div class="item3">
                            <div class="item3_image">
                                <img src={img_3} alt="" />
                            </div>
                            <div class="item3_price">
                                <p>$25.00</p>
                            </div>
                        </div>
                        <div class="item4">
                            <div class="item4_image">
                                <img src={img_2} alt="" />
                            </div>
                            <div class="item4_price">
                                <p>$25.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* summer offer types */}
        <section class="summer_offer_types">
            <div class="offer_types-container">
                <div class="offer-grid">
                    <div class="offer-details">
                        <h4>Sun Hat</h4>
                        <h3>Get Offer For Summer</h3>
                        <button>shop now</button>
                    </div>
                    <div class="offer-image">
                        <img src={banner1} alt="" />
                    </div>
                </div>
                <div class="offer-grid">
                    <div class="offer-details">
                        <h4>Ladies Bag</h4>
                        <h3>Buy One Get One Free</h3>
                        <button>shop now</button>
                    </div>
                    <div class="offer-image">
                        <img src={banner2} alt="" />
                    </div>
                </div>
                <div class="offer-grid">
                    <div class="offer-details">
                        <h4>Smart Watch</h4>
                        <h3>20% Off Smart Watch</h3>
                        <button>shop now</button>
                    </div>
                    <div class="offer-image">
                        <img src={banner3} alt="" />
                    </div>
                </div>
            </div>
        </section>

        {/* Services */}
        <section class="services">
            <div class="service-grid">
                <div class="service-image">
                    <img src="" alt="" />
                </div>
                <div class="service-description">
                    <h3>free shipping</h3>
                    <p>free shipping on all order</p>
                </div>
            </div>

            <div class="service-grid">
                <div class="service-image">
                    <img src="" alt="" />
                </div>
                <div class="service-description">
                    <h3>Support 24/7</h3>
                    <p>Support 24 hours a day</p>
                </div>
            </div>

            <div class="service-grid">
                <div class="service-image">
                    <img src="" alt="" />
                </div>
                <div class="service-description">
                    <h3>money return</h3>
                    <p>Back guarantee under 5 days</p>
                </div>
            </div>

            <div class="service-grid">
                <div class="service-image">
                    <img src="" alt="" />
                </div>
                <div class="service-description">
                    <h3>order discount</h3>
                    <p>onevery order over $150</p>
                </div>
            </div>
        </section>

{/* trend fashion banner */}
        <section class="trend-fashion-banner">
            <div class="trend-fashion-banner-description">
                <h2>trend fashions</h2>
                <p>up to 40% off selected products</p>
                <button>shop now</button>
            </div>
            <div class="trend-fashion-banner-image">
                <img src={Trend_banner} alt="" />
            </div>
        </section>


        {/* categories */}
        <section class="categories">
            <div class="category-topic">
                <h2>Categories</h2>
            </div>
            <div class="category-models">
                <div class="category-items">
                    <div class="category-image">
                        <img src={category1} alt="" />
                    </div>
                    <div class="category-name">
                        <p>Women s Cloths</p>
                    </div>
                </div>
                <div class="category-items">
                    <div class="category-image">
                        <img src={img_1} alt="" />
                    </div>
                    <div class="category-name">
                        <p>Women s Cloths</p>
                    </div>
                </div>
                <div class="category-items">
                    <div class="category-image">
                        <img src={img_2} alt="" />
                    </div>
                    <div class="category-name">
                        <p>Women s Cloths</p>
                    </div>
                </div>
                <div class="category-items">
                    <div class="category-image">
                        <img src={img_3} alt="" />
                    </div>
                    <div class="category-name">
                        <p>Women s Cloths</p>
                    </div>
                </div>
                <div class="category-items">
                    <div class="category-image">
                        <img src={category2} alt="" />
                    </div>
                    <div class="category-name">
                        <p>Women s Cloths</p>
                    </div>
                </div>
                <div class="category-items">
                    <div class="category-image">
                        <img src={All_in_one} alt=""/>
                    </div>
                    <div class="category-name">
                        <p>Women s Cloths</p>
                    </div>
                </div>
            </div>

        </section>

        {/* offer summer banner */}
        <section class="offer-summer-banner">
            <div class="offer-summer-banner-description">
                <h2>offer for summer</h2>
                <p>all fashionable products here</p>
            </div>
            <div class="offer-summer-banner-image">
                <img src={Summer_banner} alt=""/>
            </div>
        </section>
    </>
  );
};

export default HomePage;
