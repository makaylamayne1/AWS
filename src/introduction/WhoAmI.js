import React from 'react';
import InDemand from './InDemand.png';
import Woman1 from './woman1.png'
const Who_Am_I = () => {
    return (
        <div className="container">
            <h1>This is YOUR AWS ARCHIVE</h1>
            <div className="containerColor3">
                <p>Welcome to my notes. I created these notes to address the issue of wordy AWS cheat sheets and documentation, aiming to get straight to the point.</p>
                <p>To streamline the AWS study process, I've written concise thoughts on each service, providing direct insights.</p>
                <p>At the end of each section, you'll find practice questions related to the topics you just studied, eliminating the need to jump between unorganized practice tests.</p>
                <p>On the left side of the screen, you'll notice a timer. I recommend using it to manage your time while reading each section.</p>
                <p>I'm requesting only 6 USD for my hard work in creating these notes. Feel free to sign up!</p>
                <div class=" justify-content-start level">
                <img className={" w-25 h-50 level-left"} src={Woman1} ></img>
                <img className={" w-50 h-100 level-left"} src={InDemand} ></img>
                </div>
            </div>
        </div>
    );
};

export default Who_Am_I;
