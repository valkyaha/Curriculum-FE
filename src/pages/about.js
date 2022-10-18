import React from "react";

const About = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <div>
                <h1>About me</h1>
                <h2>{props.aboutMeProp.objectResponse.languageCode}</h2>
                <p>{props.aboutMeProp.objectResponse.text}</p>
            </div>
            {/*<div className="fakeimg" style={{height: 200}}>Image</div>*/}
        </div>
    );
};

export default About;
