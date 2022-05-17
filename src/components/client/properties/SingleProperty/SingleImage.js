import React from 'react';

const SingleImage = ({ property}) => {
    return (
        <>
             <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
            <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
            <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
            </div>
            </div>
        </>
    );
};

export default SingleImage;