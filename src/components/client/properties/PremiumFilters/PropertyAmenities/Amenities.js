import React, { useState } from 'react';
import slugify from 'slugify';
const Amenities = ({value, handleAmenities }) => {
    return (
        <>
          <div className="form-check">
            <input onClick={(e) => handleAmenities(e)}
            value={value}
            className="form-check-input" type="checkbox" id={slugify(value)} />
            <label className="form-check-label fs-sm" htmlFor={slugify(value)}>
              {value}
            </label>
          </div>   
        </>
    );
};

export default Amenities;