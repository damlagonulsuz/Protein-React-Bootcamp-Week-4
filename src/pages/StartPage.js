/* eslint-disable linebreak-style */
import React from 'react';
import '../App.css';
import Start from '../constants/Icon/Start';

function StartPage() {
    return (
        <>
            
            <h3 className='header'>Mathematics Game</h3>        
            <div className='start-page-context'>
                
                <h5>Total Score: </h5>
                <h5>Total Question: </h5>
                <h5>Correct Answers: </h5>
                <div className='start-button'>
                    <a href='/Questions'><Start onClick="/Questions"/></a>
                </div>
                
            </div>
        </>
    );
}

export default StartPage;
