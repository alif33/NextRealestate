import React from 'react';

const SliderItem = ({image}) => {
    return (
        <div>
            <img style={{height: '450px', width: '100%'}} src={image} alt='images'/>
        </div>
    );
};

export default SliderItem;