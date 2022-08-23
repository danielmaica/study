import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Button from './Button'

import './TaskDetails.css'

const TaskDetails = () => {

    const params = useParams()
    const history = useHistory()

    const handleBackButtonClick = () => {
        history.goBack()

    }

    console.log(params)

    return (  
        <>
        <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
        </div>
        <div className="task-details-container">
            <h2 style={{ textShadow: '#80227B 0.1em 0.1em 0.2em'}}>{params.taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur itaque repellat enim aperiam quam.</p>
        </div>
        </>
    );
}
 
export default TaskDetails;