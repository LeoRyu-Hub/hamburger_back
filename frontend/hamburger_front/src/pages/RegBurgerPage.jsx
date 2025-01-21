import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/SelectBurgerPage.css';
import BurgerIngredient from "../component/BurgerIngredient";
import Button from "../component/Button";
import axios from "axios";

function RegBurgerPage() {

    const navigate = useNavigate();

    //서버로 보낼 데이터(버거 디테일)
    const [burgerDetails, setBurgerDetails] = useState({
        brandName: '',
        burgerName: '',
        burgerImg: null,
    });

    const ingredients = [
        { name: 'bun_up', img: '/burger_ingredient/burgerbun_up.jpg', option: [] },
        { name: 'onion', img: '/burger_ingredient/onion.jpg', option: ['넣기', '빼기'] },
        { name: 'lettuce', img: '/burger_ingredient/lettuce.jpg', option: ['넣기', '빼기'] },
        { name: 'pickle', img: '/burger_ingredient/pickle.jpg', option: ['넣기', '빼기'] },
        { name: 'cheese', img: '/burger_ingredient/cheese.jpg', option: ['넣기', '빼기'] },
        { name: 'tomato', img: '/burger_ingredient/tomato.jpg', option: ['넣기', '빼기'] },
        { name: 'patty', img: '/burger_ingredient/patty.jpg', option: ['소고기', '치킨', '새우'] },
        { name: 'sauce', img: '/burger_ingredient/sauce.jpg', option: ['마요네즈', '케쳡'] },
        { name: 'bun_down', img: '/burger_ingredient/burgerbun_down.jpg', option: [] }
    ];

    //서버로 보낼 데이터(재료)
    const [selectedIngredients, setSelectedIngredients] = useState({
        onion: '넣기',
        lettuce: '넣기',
        pickle: '넣기',
        cheese: '넣기',
        tomato: '넣기',
        patty: '소고기',
        sauce: '마요네즈',
    });

    //재료 옵션 선택 처리 함수
    const handleIngredientSelect = (ingredientName, option) => {
        setSelectedIngredients(prevState => ({
            ...prevState,
            [ingredientName]: option
        }));
    };

    //브랜드 이름과 버거 이름 입력 처리 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBurgerDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // 사용자가 선택한 파일
        setBurgerDetails((prevState) => ({
            ...prevState,
            burgerImg: file,
        }));
    };

    //console.log(selectedIngredients);

    // 등록완료 버튼 클릭 시 서버로 데이터 전송
    const handleSubmit = async () => {

        const formData = new FormData();

        formData.append('brandName', burgerDetails.brandName);
        formData.append('burgerName', burgerDetails.burgerName);
        formData.append('onion', selectedIngredients.onion);
        formData.append('lettuce', selectedIngredients.lettuce);
        formData.append('pickle', selectedIngredients.pickle);
        formData.append('cheese', selectedIngredients.cheese);
        formData.append('tomato', selectedIngredients.tomato);
        formData.append('patty', selectedIngredients.patty);
        formData.append('sauce', selectedIngredients.sauce);
        formData.append('burgerImg', burgerDetails.burgerImg);

        /*
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        */

        try {
            const response = await axios.post('/burger/reg', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Burger registered successfully:', response.data);
            //navigate("/"); 성공 후 이동
        } catch (error) {
            console.error('Error registering burger:', error);
        }
    };

    return (
        <div className="main-container">
            <div className="content">
                <div className="left-ingredients">
                    {ingredients.map((ingredient) => (
                        <BurgerIngredient
                            key={ingredient.name}
                            ingredient={ingredient}
                            onSelect={handleIngredientSelect}
                        />
                    ))}
                </div>
                <div className="burger-details">
                    <input
                        type="text"
                        name="brandName"
                        placeholder="브랜드 이름"
                        value={burgerDetails.brandName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="burgerName"
                        placeholder="버거 이름"
                        value={burgerDetails.burgerName}
                        onChange={handleInputChange}
                    />
                </div>

                <input
                    type="file"
                    name="burgerImg"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                <div className="button-container">
                    <Button
                        onClick={() => navigate("/")}
                        text="뒤로가기"
                    />
                    <Button
                        onClick={handleSubmit}
                        text="등록완료"
                    />
                </div>
            </div>
        </div>
    );
}

export default RegBurgerPage;
