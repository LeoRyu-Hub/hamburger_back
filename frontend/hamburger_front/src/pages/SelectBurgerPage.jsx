import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/SelectBurgerPage.css';
import BurgerIngredient from "../component/BurgerIngredient";
import Button from "../component/Button";

function SelectBurgerPage() {

    const navigate = useNavigate();

    const ingredients = [
        { name: 'bun_up', img: '/burger_ingredient/burgerbun_up.jpg', option: [] },
        { name: 'onion', img: '/burger_ingredient/onion.jpg', option: ['넣기', '빼기'] },
        { name: 'lettuce', img: '/burger_ingredient/lettuce.jpg', option: ['넣기', '빼기'] },
        { name: 'pickle', img: '/burger_ingredient/pickle.jpg', option: ['넣기', '빼기'] },
        { name: 'cheese', img: '/burger_ingredient/cheese.jpg', option: ['넣기', '빼기'] },
        { name: 'tomato', img: '/burger_ingredient/tomato.jpg', option: ['넣기', '빼기'] },
        { name: 'patty', img: '/burger_ingredient/patty.jpg', option: ['소고기', '치킨'] },
        { name: 'sauce', img: '/burger_ingredient/sauce.jpg', option: ['마요네즈', '케쳡'] },
        { name: 'bun_down', img: '/burger_ingredient/burgerbun_down.jpg', option: [] }
    ];

    return (
        <div className="main-container">
            <div className="content">
                <div className="left-ingredients">
                    {ingredients.map((ingredient) => (
                        <BurgerIngredient
                            key={ingredient.name}
                            ingredient={ingredient}
                        />
                    ))}
                </div>
                <Button
                    onClick={() => navigate("/ResultPage")}
                    text="선택완료"
                />
            </div>
        </div>
    );
}

export default SelectBurgerPage;
