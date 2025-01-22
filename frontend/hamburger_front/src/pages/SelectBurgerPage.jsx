import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/SelectBurgerPage.css';
import BurgerIngredient from "../component/BurgerIngredient";
import Button from "../component/Button";
import axios from "axios";

function SelectBurgerPage() {

    const navigate = useNavigate();

    const ingredients = [
        { name: 'bun_up', img: '/burger_ingredient/burgerbun_up.jpg', option: [] },
        { name: 'onion', img: '/burger_ingredient/onion.jpg', option: ['넣기', '빼기'] },
        { name: 'lettuce', img: '/burger_ingredient/lettuce.jpg', option: ['넣기', '빼기'] },
        { name: 'pickle', img: '/burger_ingredient/pickle.jpg', option: ['넣기', '빼기'] },
        { name: 'cheese', img: '/burger_ingredient/cheese.jpg', option: ['넣기', '빼기'] },
        { name: 'tomato', img: '/burger_ingredient/tomato.jpg', option: ['넣기', '빼기'] },
        { name: 'patty', img: '/burger_ingredient/patty.jpg', option: ['소고기', '치킨', '새우'] },
        { name: 'sauce', img: '/burger_ingredient/sauce.jpg', option: ['마요네즈', '케쳡', '사우전드 드레싱'] },
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

    // 등록완료 버튼 클릭 시 서버로 데이터 전송
    const handleSubmit = async () => {

        const formData = new FormData();

        formData.append('onion', selectedIngredients.onion);
        formData.append('lettuce', selectedIngredients.lettuce);
        formData.append('pickle', selectedIngredients.pickle);
        formData.append('cheese', selectedIngredients.cheese);
        formData.append('tomato', selectedIngredients.tomato);
        formData.append('patty', selectedIngredients.patty);
        formData.append('sauce', selectedIngredients.sauce);

        /*
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        */
        
        try {
            const response = await axios.post('/burger/choice', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            //console.log(response.data.burgerList);

            if (response.data.burgerList.length == 0){
                alert('해당하는 버거가 없습니다. 다시 골라주세요!');
                return;
            }
            
            navigate("/ResultPage", {state : response.data.burgerList} ); 

        } catch (error) {
            alert("에러발생");
            //console.error('Error registering burger:', error);
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
                <Button
                    onClick={handleSubmit}
                    text="선택완료"
                />
            </div>
        </div>
    );
}

export default SelectBurgerPage;
