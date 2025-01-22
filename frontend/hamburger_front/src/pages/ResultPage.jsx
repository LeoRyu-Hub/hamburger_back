import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/ResultPage.css';
import hamburgerImage from '../imgs/hamburger_img.png';
import Button from '../component/Button';

function ResultPage() {

    const navigate = useNavigate();
    const location = useLocation();

    const burgerList = location.state;

    //console.log(burgerList);

    //console.log(burgerList[0].brandName);

    const brand = burgerList[0].brandName;   // 식당 이름
    const burgerName = burgerList[0].burgerName;   // 햄버거 종류
    const burgerImage = burgerList[0].burgerUrl;   //해당 햄버거 이미지 경로

    //console.log(burgerImage);

    return (
        <div className="result-container">
            <div className="result-content">
                <div className="left-image">
                    <img src={burgerImage} alt="햄버거" className="burger-image"/>
                </div>
                <div className="right-text">
                    <h1>오늘의 <span className="highlight">추천 메뉴</span>는 <br /> "{brand}"의 "{burgerName}" 입니다!</h1>
                    <Button
                    onClick={() => navigate("/")}
                    text="돌아가기"
                    />
                </div>
            </div>
        </div>
    );
}

export default ResultPage;
