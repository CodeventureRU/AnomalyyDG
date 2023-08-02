import React from 'react';

const TextSliderItem = ({children, state="_active", number}) => {

    return (
        <div className={`text-slider-item ${state}`}>
            <span>0{number}</span>
            {children}
        </div>
    );
};

export default TextSliderItem;