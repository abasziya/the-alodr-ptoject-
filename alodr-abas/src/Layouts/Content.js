import React, { Component } from "react";
import Article from "../Components/Article";
import TopDocCard from "../Components/TopDocCard";



class Content extends Component {
    render() {
        return (
            <main>
                <div className="main">
                    <div className="main-topDoc spa">
                        <div className="main-topDoc-Special Special1">
                            <div className="main-topDoc-Special-title">
                                <h3>برترین دکترهای بخش اطفال</h3>
                                <div className="seeAll"><a href="#">مشاهده همه</a></div>
                            </div>
                            <div className="main-topDoc-Special-card animate__animated animate__fadeInLeft">
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />

                            </div>
                        </div>

                        <div className="main-topDoc-Special Special2">
                            <div className="main-topDoc-Special-title">
                                <h3>برترین دکترهای بخش اطفال</h3>
                                <div className="seeAll"><a href="#">مشاهده همه</a></div>
                            </div>
                            <div className="main-topDoc-Special-card animate__animated animate__fadeInRight">
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />

                            </div>
                        </div>

                        <div className="main-topDoc-Special Special3">
                            <div className="main-topDoc-Special-title">
                                <h3>برترین دکترهای بخش اطفال</h3>
                                <div className="seeAll"><a href="#">مشاهده همه</a></div>
                            </div>
                            <div className="main-topDoc-Special-card">
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />

                            </div>
                        </div>
                    </div>


                    <div className="main-topDoc article">
                        <Article />
                        <Article />
                        <Article />

                    </div>

                    <div className="main-topDoc cit">
                        <div className="main-topDoc-city city1">
                            <div className="main-topDoc-city-title">
                                <h3>برترین دکترهای شهر اصفهان</h3>
                                <div className="seeAll"><a href="#">مشاهده همه</a></div>
                            </div>
                            <div className="main-topDoc-city-card  ">
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />

                            </div>
                        </div>

                        <div className="main-topDoc-city city2">
                            <div className="main-topDoc-city-title">
                                <h3>برترین دکترهای شهر اصفهان</h3>
                                <div className="seeAll"><a href="#">مشاهده همه</a></div>
                            </div>
                            <div className="main-topDoc-city-card">
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />

                            </div>
                        </div>

                        <div className="main-topDoc-city city3">
                            <div className="main-topDoc-city-title">
                                <h3>برترین دکترهای شهر اصفهان</h3>
                                <div className="seeAll"><a href="#">مشاهده همه</a></div>
                            </div>
                            <div className="main-topDoc-city-card">
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />
                                <TopDocCard />

                            </div>
                        </div>
                    </div>


                </div>
            </main>
        )
    }
}



export default Content;