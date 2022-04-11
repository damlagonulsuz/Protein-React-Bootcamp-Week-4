/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import '../App.css';
import Underline from '../constants/Icon/Underline';
import Undeline_long from '../constants/Icon/Underline-long';
import Restart from '../constants/Icon/Restart';


function FinalPage() {
    return(
        <div className='out '>  
            <div className='left-side'>

                <h3 className='title-final'>Final</h3>
                <Underline />
                <div className='final-page-context'>
                    <h4>Point: </h4>
                    <h4>Questions: </h4>
                    <h4>Correct Answers: </h4>
                </div>
                <div className='start-button'>
                    <a href='/'><Restart onClick="/"/></a>
                </div>
            </div>

            <div className='rigth-side'>
                <h3 className='title-final'>All Questions</h3>
                <Undeline_long />
                <div className='final-page-context'>
                    <h4>sorular:</h4>
                </div>

            </div>


            


        </div>

    );
}

export default FinalPage;