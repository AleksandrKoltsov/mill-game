import React from 'react';
import '../../styles/Answers.css';

const Answers = (props) => {
    return (
        <div>
            {props.data.map((el) => {
                if(el.true) {
                    return(
                         <div
                            className="button1"
                            key={el.id}
                            onClick={()=>props.callback(el.true)}
                         >{el.true}</div>
                    )
                } else {
                    return(
                        <div
                            className="button1"
                            key={el.id}
                            onClick={()=>props.callback(el.false)}
                        >{el.false}</div>
                    )
                }
            })}
        </div>
    )
};
export default Answers;