import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/SelectBurgerPage.css';
import BurgerIngredient from "../component/BurgerIngredient";
import Button from "../component/Button";
import axios from "axios";

function RegBurgerPage() {

    const navigate = useNavigate();

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

    //서버로 보낼 데이터 배열
    const [selectedIngredients, setSelectedIngredients] = useState({
        onion: '넣기',
        lettuce: '넣기',
        pickle: '넣기',
        cheese: '넣기',
        tomato: '넣기',
        patty: '소고기',
        sauce: '마요네즈',
    });

     // 재료 옵션 선택 처리 함수
     const handleIngredientSelect = (ingredientName, option) => {
        setSelectedIngredients(prevState => ({
            ...prevState,
            [ingredientName]: option
        }));
    };

    //console.log(selectedIngredients);

    // 등록완료 버튼 클릭 시 서버로 데이터 전송
    const handleSubmit = async () => {
        console.log(selectedIngredients);

        try {
            const response = await axios.post('/burger/reg', selectedIngredients);
            console.log('Burger registered successfully:', response.data);
            //navigate("/"); // 성공 후 이동
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
