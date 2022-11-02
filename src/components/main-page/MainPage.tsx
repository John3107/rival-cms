import React from 'react';
import './MainPage.css';
import top from '../../assets/backgrounds/top-part-main-page.svg';
import logo from '../../assets/icons/logo.svg';

const MainPage = () => {

    const footerList = ['Register', 'Terms & conditions', 'Privacy policy', 'Documentation', 'Pricing', 'Our blog']

    const onClickHandler = () => {
    }

    return <div className="main-page">
        <img src={top} className="top" alt="top part"/>
        <nav className="nav">
            <ul className="nav__ul">
                <li className="nav__li">Pricing</li>
                <li className="nav__li">About</li>
                <li className="main-button" onClick={onClickHandler}>Sign in</li>
            </ul>
        </nav>
        <main className="body">
            <div className="body__title">Rival<span className="body__title black">CMS</span></div>
            <span className="body__subtitle">Fresh new way to build sites</span>
            <button className="main-button main-button__get-started"
                    onClick={onClickHandler}>Get started free
            </button>
            <span className="no-card">*no card needed</span>
            <div className="miniature-page">
                <div className="miniature-page__header">
                    <div className="fake-logo"></div>
                </div>
                <div className="miniature-page__body">
                    <div className="miniature-page__menu">
                        <div className="rectangle rectangle__blue"></div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                            <div className="circle circle__red"></div>
                        </div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="rectangle rectangle__blue with_margin_top"></div>
                        <div className="menu-part menu-part__without-margin">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                        <div className="menu-part">
                            <div className="circle"></div>
                            <div className="rectangle"></div>
                        </div>
                    </div>
                    <div className="miniature-page__main">
                        <header className="miniature-page__head">
                            <div className="rectangle rectangle__first"></div>
                            <div className="rectangle rectangle__second"></div>
                            <div className="rectangle rectangle__third"></div>
                            <div className="rectangle rectangle__biggest"></div>
                        </header>
                        <main className="miniature-page__chapters">
                            <div className="chapter">
                                <div className="chapter__chapter-main">
                                    <div className="rectangle rectangle__chapter"></div>
                                    <div className="rectangle rectangle__chapter__medium"></div>
                                </div>
                                <div className="rectangle rectangle__green"></div>
                                <div className="chapter__chapter-support">
                                    <div className="rectangle rectangle__chapter__small"></div>
                                    <div className="rectangle rectangle__chapter__smallest"></div>
                                </div>
                                <div className="chapter__chapter-context">
                                    <div className="small-circle"></div>
                                    <div className="small-circle"></div>
                                    <div className="small-circle"></div>
                                </div>
                            </div>
                            <div className="chapter">
                                <div className="chapter__chapter-main">
                                    <div className="rectangle rectangle__chapter"></div>
                                    <div className="rectangle rectangle__chapter__medium"></div>
                                </div>
                                <div className="rectangle rectangle__green background_rose"></div>
                                <div className="chapter__chapter-support">
                                    <div className="rectangle rectangle__chapter__small"></div>
                                    <div className="rectangle rectangle__chapter__smallest"></div>
                                </div>
                                <div className="chapter__chapter-context">
                                    <div className="small-circle"></div>
                                    <div className="small-circle"></div>
                                    <div className="small-circle"></div>
                                </div>
                            </div>
                            <div className="chapter">
                                <div className="chapter__chapter-main">
                                    <div className="rectangle rectangle__chapter"></div>
                                    <div className="rectangle rectangle__chapter__medium"></div>
                                </div>
                                <div className="rectangle rectangle__green"></div>
                                <div className="chapter__chapter-support">
                                    <div className="rectangle rectangle__chapter__small"></div>
                                    <div className="rectangle rectangle__chapter__smallest"></div>
                                </div>
                                <div className="chapter__chapter-context">
                                    <div className="small-circle"></div>
                                    <div className="small-circle"></div>
                                    <div className="small-circle"></div>
                                </div>
                            </div>
                            <div className="chapter">
                                <div className="chapter__chapter-main">
                                    <div className="rectangle rectangle__chapter"></div>
                                    <div className="rectangle rectangle__chapter__medium"></div>
                                </div>
                                <div className="rectangle rectangle__green background_yellow"></div>
                                <div className="chapter__chapter-support">
                                    <div className="rectangle rectangle__chapter__small"></div>
                                    <div className="rectangle rectangle__chapter__smallest"></div>
                                </div>
                                <div className="chapter__chapter-context">
                                    <div className="small-circle"></div>
                                    <div className="small-circle"></div>
                                    <div className="small-circle"></div>
                                </div>
                            </div>
                        </main>
                        <footer className="miniature-page__footer">
                            <div className="bread-crumb default">1</div>
                            <div className="bread-crumb">2</div>
                            <div className="bread-crumb">3</div>
                        </footer>
                    </div>
                </div>
            </div>
        </main>
        <footer className="footer">
            <ul className="footer__ul">{
                footerList.map((el, i) => <li className="footer__li" key={i}>{el}</li>)
            }</ul>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <div className="logo__text">
                    <span className="logo__text_left-side">Rival</span>
                    <span className="logo__text_right-side">CMS</span>
                </div>
            </div>
        </footer>
    </div>
}

export default MainPage;