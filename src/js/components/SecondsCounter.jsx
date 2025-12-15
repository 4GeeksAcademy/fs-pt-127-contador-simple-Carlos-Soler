import React from "react";

const SecondsCounter = (props) => {
    const sixDigits = props.seconds.toString().padStart(6, "0");

    return (
        <div className="counter-container">

            <div className="digit-box">
                <div className="digit-box">
                 <i className="fa-regular fa-clock"></i>
                </div>
            </div>

            {sixDigits.split("").map((digit, index) => (
                <div key={index} className="digit-box">
                    {digit}
                </div>
            ))}

        </div>
    );
};

export default SecondsCounter;
