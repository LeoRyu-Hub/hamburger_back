import React from 'react';
import '../css/ResultPage.css';
import hamburgerImage from '../img/hamburger_img.png';

function ResultPage() {
    const restaurant = '롯데리아';   // 식당 이름
    const burgerName = '새우버거';   // 햄버거 종류
    //const burgerImage = {hamburgerImage};   해당 햄버거 이미지 경로

    return (
        <div className="result-container">
            <div className="result-content">
                <div className="left-image">
                    <img src={hamburgerImage} alt="햄버거" className="burger-image"/>
                </div>
                <div className="right-text">
                    <h1>오늘의 추천 메뉴는 <br /> "{restaurant}"의 "{burgerName}" 입니다!</h1>
                </div>
            </div>
        </div>
    );
}

export default ResultPage;
