import React from 'react';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import '../styles/GameOver.css';

const GameOver = ({price}) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="main"
        >
            <div xs={12} md={6} className="hand"/>
            <div xs={12} md={6}>
                <p className="score">Total score:</p>
                <p className="price">${price} earned</p>
                <div xs={12}>
                    <Link to='/'>
                        <button className='startBtn'>
                            <p className='textBtn'>Try again</p>
                        </button>
                    </Link>
                </div>
            </div>
        </Grid>
    )
};

export default GameOver;







{/*<div className="endContainer">*/}
{/*    <div className="hand"/>*/}
{/*    <div className="container">*/}
{/*    <span className="score">Total score:</span>*/}
{/*<span className="price">${price} earned</span>*/}
{/*<Link to='/'>*/}
{/*<button className='startBtn'>*/}
{/*<p className='textBtn'>Try again</p>*/}
{/*</button>*/}
{/*</Link>*/}
{/*</div>*/}
{/*</div>*/}