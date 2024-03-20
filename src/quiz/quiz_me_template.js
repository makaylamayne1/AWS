import React from 'react';
import './quiz.css'

const Quiz_Me_Template = (props) =>{
    
    return(
        <div className={"quizcontainer1"}>
        <div className={"quizcontainer2"}>
        <div className={"title"}>
            {props.title}
        </div>
        <div className={"description"}></div>
        </div>
        </div>

    )
}

export default Quiz_Me_Template;