import React from 'react';
import './MainPage.css';
import top from '../../assets/backgrounds/top-part-main-page.svg';

const MainPage = () => {

    const onClickHandler = () => {
        console.log(1111)
    }

    return <div className="main-page">
        <img src={top} className="main-page__top" alt="top part"/>
        <nav className="main-page__nav">
            <ul className="main-page__nav-ul">
                <li className="main-page__nav-li">Pricing</li>
                <li className="main-page__nav-li">About</li>
                <li className="main-page__nav-li sign" onClick={onClickHandler}>Sign in</li>
            </ul>
        </nav>
       <div className="main-page__body">
       <div className="main-page__title">Rival<span className="main-page__title modifier">CMS</span></div>
           <span className="main-page__subtitle">Fresh new way to build sites</span>
       </div>
    </div>
}

export default MainPage;