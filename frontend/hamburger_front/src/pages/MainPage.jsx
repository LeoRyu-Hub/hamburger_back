import React from 'react';
import '../css/MainPage.css';
import { useNavigate } from 'react-router-dom';
import hamburgerImage from '../img/hamburger_img.png';
import Button from '../component/Button';

function MainPage() {

    const navigate = useNavigate();

    //console.log(hamburgerImage);

    return (
        <div className="main-container">
            <div className="content">
                <div className="left-image">
                    <img src={hamburgerImage} alt="햄버거" />
                </div>
                <div className="right-text">
                    <h1>당신의 햄버거를<br /> 추천해드립니다!</h1>
                    <Button
                        onClick={() => navigate("/SelectBurgerPage")}
                        text="고르러 가기"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
