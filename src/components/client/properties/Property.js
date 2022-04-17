export default function Property({ property }){

    return(
        <div className="card card-hover card-horizontal border-0 shadow-sm mb-4">
            <div className="card-img-top position-relative" style={{backgroundImage: 'url(img/rokye-website/catalog/16.jpg)'}}><a className="stretched-link" href="real-estate-single.html" />
            <div className="position-absolute start-0 top-0 pt-3 ps-3"><span className="d-table badge bg-success mb-1">Verified</span></div>
            <div className="position-absolute end-0 top-0 pt-3 pe-3 zindex-5">
                <button className="btn btn-icon btn-light btn-xs text-primary rounded-circle shadow-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist"><i className="fi-heart" /></button>
            </div>
            </div>
            <div className="card-body position-relative pb-3">
            <h3 className="h6 mb-2 fs-base"><a className="nav-link stretched-link" href="real-estate-single.html">{property.bedrooms} Bed {property.propertyType}| 1500 sq.ft</a></h3>
            <p className="mb-4 fs-sm text-muted">Devnandan residency in Adalaj</p>
            <div className="border-bottom mb-2">
                <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                    <li className="col fw-normal"><i className="fi-bed mt-n1 me-2 fs-lg align-middle" />{property.furnishedStatus}</li>
                    <li className="col fw-normal"><i className="fi-users mt-n1 me-2 fs-lg align-middle" />{property.tenantsPreferred}</li>
                </ul>
            </div>
            <div>
                <ul className="list-unstyled row row-cols-lg-2 row-cols-md-2 row-cols-1 gy-1 mb-1 text-nowrap">
                    <li className="col fw-normal"><i className="fi-cash mt-n1 me-2 fs-lg align-middle" />₹{property.monthlyRent} Rent</li>
                    <li className="col fw-normal"><i className="fi-wallet mt-n1 me-2 fs-lg align-middle" />₹{property.securityAmount} Deposit</li>
                </ul>
            </div>
            </div>
        </div>
    )
}