import React from 'react';
import FeedbackForm from "../views/FeedbackForm/FeedbackForm";
import "./FeedbackPage.css"


const FeedbackPage = () => {
    return (
        <div>
            <h1>Оставьте обратную связь:</h1>
            <FeedbackForm />
        </div>
    );
};

export default FeedbackPage;