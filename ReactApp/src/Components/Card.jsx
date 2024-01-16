import {Clock} from "./Icons/Clock.jsx";
import {Leaf} from "./Icons/Leaf.jsx";
import {Stickman} from "./Icons/Stickman.jsx";
import {ArrowU} from "./Icons/ArrowU.jsx";

export function Card(name,time,ingr,diff,vegan,id,img,descr){
    function IsVegan(){
        if (vegan){
            return 'vegan'
        }else{
            return 'non vegan'
        }
    }
    let ingrs = ingr.map(item =>{
        return <p>{item}</p>
    })
    return(
        <div className={'card'}>
            <div className={'cardMain'}>
                <div className={'cardL'}>
                    <img src={img} alt=""/>
                </div>
                <div className={'cardR'}>
                    <h2>{name}</h2>
                    <div>
                        <p id={'time'}><Clock/>{time}min</p>
                        <p id={'vegam'}><Leaf/>{IsVegan}</p>
                        <p id={'diff'}><Stickman/>{diff}</p>
                    </div>
                </div>
                <button className={'cardButton'}>Zobrazit ingredience {ArrowU}</button>
            </div>
            <div className={'cardInfo'}>
                <p className={'descr'}>{descr}</p>
                <p className={'ingr'}>{ingrs}</p>
            </div>
        </div>
    )
}