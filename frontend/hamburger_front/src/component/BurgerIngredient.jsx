import React, { useState } from "react";

function BurgerIngredient({ ingredient, onSelect  }) {

    //console.log(ingredient);

    const [selectedOption, setOption] = useState(ingredient.option[0]);

    const isGrayScale = selectedOption === '빼기';

    const selectedImg = () => {
        if (ingredient.name === 'patty') {
            if (selectedOption === '소고기') {
                return '/burger_ingredient/patty_beef.jpg';
            } else if (selectedOption === '치킨') {
                return '/burger_ingredient/patty_chiken.jpg';
            } else if (selectedOption === '새우') {
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
    
    //console.log(onSelect);
    const handleSelectChange = (e) => {
        const newOption = e.target.value;
        setOption(newOption);  // 선택된 옵션을 상태에 저장
        //console.log(newOption);
        onSelect(ingredient.name, newOption);  // 부모 컴포넌트에 옵션 변경 알리기
    };

    return (
        <div className="ingredient-container">
            <img className="ingredient-img"
                src={selectedImg()}
                alt={ingredient.name}
                style={{ filter: isGrayScale ? 'grayscale(100%)' : 'none' }}
            />

            {ingredient.option.length > 0 && (
                <select
                    value={selectedOption}
                    onChange={handleSelectChange}
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
