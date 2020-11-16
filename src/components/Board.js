import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {gameOver, setIncrement, result, isMenu} from "../redux/actions";
import Menu from "./BoardComponents/Menu";
import Answers from "./BoardComponents/Answers";
import Question from "./BoardComponents/Question";
import GameOver from "./GameOver";
import '../styles/Board.css';
import {Hidden} from "@material-ui/core";

const Board = ({
       arrAnswers,
       i,
       setIncrement,
       end,
       gameOver,
       result,
       price,
       menu,
       isMenu
}) => {
    //if array is empty else return Error page
    if (arrAnswers.length > 0) {
        const item = {
            question: arrAnswers[i].question.title,
            answ: arrAnswers[i].question.answers,
            price: arrAnswers[i].price,
            len: arrAnswers.length,
            true: arrAnswers[i].question.answers.filter(el => el.true)[0].true
        };
        // const renderPrice = [];
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
                <div className="container">
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
                    </div>
                    <div>
                        <Hidden only={['xs', 'sm', 'md']}>
                            <div className='menu'>
                                <Hidden lgUp>
                                    <div
                                        className="btnClose bckgnd"
                                        onClick={()=>isMenu(false)}
                                    />
                                </Hidden>
                                <Menu
                                    data={arrAnswers}
                                    price={price}
                                />
                            </div>
                        </Hidden>
                        <Hidden lgUp>
                            <div
                                onClick={()=>isMenu(true)}
                                className="btnMenu bckgnd"
                            />
                        </Hidden>
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
        price: state.data.result,
        menu: state.data.isMenu
    }
};
const mapDispatchToProps = {
    setIncrement,
    gameOver,
    result,
    isMenu
};
export default connect(mapStateToProps, mapDispatchToProps)(Board);