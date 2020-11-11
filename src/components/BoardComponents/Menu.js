import React, {useEffect} from 'react';
import '../../styles/Menu.css';

const Menu = ({data, price}) => {

    useEffect(()=>{
        const domElement = document.querySelectorAll('.nextContainer');
        for (let node of domElement) {
            if(node.innerText === String(price)) {
                node.classList.add('activeContainer');
                node.classList.remove('nextContainer');
            }
        }
        const fallElement = document.querySelectorAll('.activeContainer');
        for (let item of fallElement) {
            if(Number(item.innerText) < price) {
                item.classList.add('inActiveContainer');
                item.classList.remove('activeContainer');
            }
        }
        // console.log(typeof domElement);
        // const elem = domElement.filter(el =>
        //     el.innerText !== String(price)
        // );
        // console.log(elem);
    });
    return data.map(el => {
        return (
            <div key={el.id} className="background nextContainer">
                {el.price}
            </div>
        )
    }).reverse();
};
export default Menu;