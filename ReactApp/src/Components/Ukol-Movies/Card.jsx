import { StarFull } from "./Icons/Star-Full.jsx";
import { StarBlank } from "./Icons/Star-Blank.jsx";
import { useState } from "react";

export function Card(img, name, creator, starNum) {

    const [checkedStars, setCheckedStars] = useState([false, false, false, false, false]);

    const handleStarClick = (index) => {
        const newCheckedStars = checkedStars.map((_, i) => (i <= index));
        setCheckedStars(newCheckedStars);
    };

    const stars = checkedStars.map((isChecked, index) => (
        <label key={index}>
            <input
                className={'checkbox'}
                type="checkbox"
                checked={isChecked}
                onChange={() => handleStarClick(index)}
            />
            {isChecked ? <StarFull /> : <StarBlank />}
        </label>
    ));

    return (
        <div className={'card'}>
            <div className={'card-info'}>
                <img src={img} alt="" />
                <div>
                    <h2>{name}</h2>
                    <p>{creator}</p>
                </div>
            </div>
            <div className={'stars'}>{stars}</div>
        </div>
    );
}
