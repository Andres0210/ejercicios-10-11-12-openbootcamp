
import React, { useState } from 'react';

const RgbComponent = () => {

    const [colors, setColors] = useState({
        red: 0,
        green: 0,
        blue: 0,

    });

    const [manageInterval, setManageInterval] = useState(0);


    const createColor = () => {
        return setColors({
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255),
        })

    }

    const onChangeColor = () => {
        return setManageInterval(setInterval(createColor, 600))
    }

    const onStopChangeColor = () => {
        return clearInterval(manageInterval);
    }

    const componentStyle = {
        width: "255px",
        height: '255px',
        backgroundColor: `rgb(${colors.red},${colors.green},${colors.blue})`,
        color: "white"
    }

    return (
        <div>
            <div
                onMouseOver={onChangeColor}
                onMouseLeave={onStopChangeColor}
                onDoubleClick={onStopChangeColor}
                style={componentStyle}>
            </div>
        </div>
    );
}

export default RgbComponent;
