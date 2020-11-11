import React from 'react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {gameOver, getConfig, result, setIncrement, setQuestions} from "../redux/actions";
import Grid from "@material-ui/core/Grid";
import Config from '../data/gameConfig';
import '../styles/MainPage.css';


const MainPage = ({
              data,
              setQuestions,
              result,
              gameOver,
              getConfig,
              setIncrement
}) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="main"
        >
            <div xs={12} md={6} className="img">
                {/*<img src="../assets/main/hand.svg" alt="finger up" className='img'/>*/}
            </div>
            <div xs={12} md={6}>
                <span className='mainText'>Who wants to be a millionaire?</span>
                <div xs={12}>
                    <Link to='/Board'>
                        <button
                            className='startBtn'
                            onClick={()=>{
                                result(null);
                                setIncrement(0);
                                gameOver(false);
                                getConfig(Config);
                                setQuestions(data);
                            }}
                        >
                            <p className='textBtn'>START</p>
                        </button>
                    </Link>
                </div>
            </div>
        </Grid>
    )
};

const mapStateToProps = state => {
    const data = state.data.data.data;
    //filtered array, and got new array consist from 12 questions and get him in props (data);
    const arr = data.reduce((bank, item) => bank.includes(item.price) ? bank : [...bank, item.price], []);
    const filtered = (arr, value) => {
        const filteredArr = arr.filter(el => el.price === value);
        return filteredArr[Math.floor(Math.random() * filteredArr.length)];
    };
    const questionArr = [];
    arr.map(el => questionArr.push(filtered(data, el)));

    return {
        data: questionArr
    };
};
const mapDispatchToProps = {
    setQuestions,
    result,
    gameOver,
    getConfig,
    setIncrement
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);