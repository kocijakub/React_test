import { StarFull } from "./Icons/Star-Full.jsx";
import { StarBlank } from "./Icons/Star-Blank.jsx";
import { useState } from "react";

export function Card(img, name, creator, starNum) {

    let stars =[]
    for (let i = 0; i < 5; i++) {
        let [checked,change] = useState(false)
        let star = <label>
            <input className={'checkbox'} type="checkbox" onChange={() =>{ change(!checked)}}/>
            {checked ? <StarFull/>:<StarBlank/>}
        </label>
        stars.push(star)
    }

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
