import React from 'react';
import {connect} from "react-redux";
import {gameOver, setIncrement, result} from "../redux/actions";
import Menu from "./BoardComponents/Menu";
import Answers from "./BoardComponents/Answers";
import Question from "./BoardComponents/Question";
import GameOver from "./GameOver";
import '../styles/Board.css';

const Board = ({
   arrAnswers,
   i,
   setIncrement,
   end,
   gameOver,
   result,
   price
}) => {
    //if array is't empty else return Error page
    if (arrAnswers.length > 0) {
        const item = {
            question: arrAnswers[i].question.title,
            answ: arrAnswers[i].question.answers,
            price: arrAnswers[i].price,
            len: arrAnswers.length,
            true: arrAnswers[i].question.answers.filter(el => el.true)[0].true
        };
        const renderPrice = [];
        //getting answer in callback
        const handleClickAnswer = (response) => {
            if(response === item.true) {
                setIncrement(++i);
                result(item.price);

                if(i === item.len) {
                    result(item.price);
                    setIncrement(i = 0);
                    gameOver(true);
                }
            } else {
                result(price);
                gameOver(true);
            }
        };

        //create array with answers for question and transfer on props component
        if(end) {
            return (
                <GameOver price={price}/>
            )
        } else {
            return (
                <div className='board'>
                    <div className='question'>
                        <Question
                            data={item.question}
                        />
                    </div>
                    <div className='answers'>
                        <Answers
                            data={item.answ}
                            callback={handleClickAnswer}
                        />
                    </div>
                    <div className='menu'>
                        <Menu
                            data={arrAnswers}
                            price={price}
                        />
                    </div>
                </div>
            )
        }
    }
    return <div>Error</div>
};
const mapStateToProps = state => {
    return {
        arrAnswers: state.data.questions,
        i: state.data.iterator,
        end: state.data.gameOver,
        price: state.data.result
    }
};
const mapDispatchToProps = {
    setIncrement,
    gameOver,
    result
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);