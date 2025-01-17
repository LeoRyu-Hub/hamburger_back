import React, { useState } from "react";

function BurgerIngredient({ ingredient }) {

    //console.log(ingredient);

    const [selectedOption, setOption] = useState(ingredient.option[0]);

    const isGrayScale = selectedOption === '빼기';

    const pattyImg = () => {
        if (ingredient.name === 'patty') {
            if (selectedOption === '소고기') {
                return '/burger_ingredient/patty_beef.jpg';
            } else if (selectedOption === '치킨') {
                return '/burger_ingredient/patty_chiken.jpg';
            }
            else if (selectedOption === '새우') {
                return '/burger_ingredient/patty_prawn.jpg';
            }
        }

        if (ingredient.name === 'sauce') {
            if (selectedOption === '마요네즈') {
                return '/burger_ingredient/sauce.jpg';
            } else if (selectedOption === '케쳡') {
                return '/burger_ingredient/sauce_ketchup.jpg';
            }
        }

        //console.log("::"+ingredient.img);
        return ingredient.img;
    };

    //console.log(selectedOption);
    //console.log(ingredient);

    return (
        <div className="ingredient-container">
            <img className="ingredient-img"
                src={pattyImg()}
                alt={ingredient.name}
                style={{ filter: isGrayScale ? 'grayscale(100%)' : 'none' }}
            />

            {ingredient.option.length > 0 && (
                <select
                    value={selectedOption}
                    onChange={(e) => setOption(e.target.value)}
                    className="ingredient-select"

                >
                    {ingredient.option.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default BurgerIngredient;
