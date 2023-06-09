import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f2f2f2',
        padding: '20px',
    };

    const headingStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: "center",
    };

    const descriptionStyle = {
        fontSize: '20px',
        marginBottom: '30px',
        textAlign: 'center',
    };

    const buttonStyle = {
        fontSize: '24px',
        padding: '10px 30px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Как управлять моим проектом?</h1>
            <p style={descriptionStyle}>Ответь на несколько простых вопросов и получи рекоммендацию по проектному управлению</p>

            <Link to="/quiz">
                <Button variant="primary" style={buttonStyle}>
                    Начать
                </Button>
            </Link>
        </div>
    );
};

export default HomePage;
