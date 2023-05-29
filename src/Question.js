import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import tree from "./tree";
import { useNavigate } from "react-router-dom";

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    maxHeight: '100vh',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    position: "relative"
};

const questionAnswer = {
    fontSize: '30px',
    marginBottom: '20px',
};

const buttonStyle = {
    fontSize: '18px',
    padding: '10px 30px',
    width: '20%',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const QuestionComponent = () => {
    const navigate = useNavigate();
    const [exactQuestion, setExactQuestion] = useState(tree);

    const handleAnswerYes = () => {
        if (exactQuestion?.answerYes) {
            setExactQuestion(prev => prev.answerYes)
        }
    };

    const handleAnswerNo = () => {
        if (exactQuestion?.answerNo) {
            setExactQuestion(prev => prev.answerNo)
        }
    };

    const handleReturn = () => {
        navigate('/');
    }

    return (
        <div style={containerStyle}>
            {
                exactQuestion?.answer &&
                <>
                    <h3 style={questionAnswer}>Answer:</h3>
                    <p style={{fontSize: 30, fontWeight: 700, marginBottom: 20, textAlign: 'center'}}>{exactQuestion?.answer}</p>
                    <p style={{fontSize: 18, fontWeight: 500, marginBottom: 20, width: '70%', textAlign: 'center'}}>{exactQuestion?.description}</p>
                    <Button variant="primary" style={{...buttonStyle}} onClick={handleReturn}>
                        Return
                    </Button>
                    {
                        (exactQuestion?.answerYes || exactQuestion?.answerNo) && <div style={{content: "", width: "80%", height: 2, backgroundColor: "#000", marginBottom: 40, marginTop: 20, flexShrink: 0}} />
                    }

                </>
            }

            {
                exactQuestion?.text &&
                <>
                    <p style={{fontSize: 30, fontWeight: 700, marginBottom: 40, textAlign: 'center'}}>{exactQuestion?.text}</p>
                </>
            }

            {
                (exactQuestion?.answerYes || exactQuestion?.answerNo) &&
                <div style={{display: 'flex', alignItems: "center", justifyContent: "center", gap: '7%', width: '100%'}}>
                    <Button variant="primary" style={buttonStyle} onClick={handleAnswerYes}>
                        Да
                    </Button>
                    <Button variant="primary" style={buttonStyle} onClick={handleAnswerNo}>
                        Нет
                    </Button>
                </div>
            }
        </div>
    );
};

export default QuestionComponent;
