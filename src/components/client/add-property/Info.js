import { useDispatch, useSelector } from 'react-redux';
import { setBasic } from '../../../../store/property/actions';

function Info(){

    const dispatch = useDispatch();
    const { property }= useSelector(state=>state); 
    const { basic } = property;

    return(
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 className="h4 mb-4"><i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />Basic info</h2>
            <div className="row">
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-education-level">Category<span className="text-danger">*</span></label>
                <select
                    name="propertyCategory"
                    onChange={e=>dispatch(setBasic(e))} 
                    value={basic.propertyCategory? basic.propertyCategory: ''}
                    className="form-select form-select-lg" 
                    id="pr-education-level"
                >
                    <option selected>Choose</option>
                    <option value="Rent">For rent</option>
                </select>
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Property type<span className="text-danger">*</span></label>
                <select
                    name="propertyType"
                    onChange={e=>dispatch(setBasic(e))} 
                    value={basic.propertyType? basic.propertyType: ''}
                    className="form-select form-select-lg" 
                    id="pr-education-level"
                >
                    <option selected>Choose</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                </select>
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Bedrooms<span className="text-danger">*</span></label>
                <select
                    name="bedrooms"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.bedrooms? basic.bedrooms: ''}  
                    className="form-select form-select-lg" 
                    id="pr-education-level"
                >
                    <option selected>Choose</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">3+ BHK</option>
                </select>
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Bathrooms<span className="text-danger">*</span></label>
                <select
                    name="bathrooms"
                    onChange={e=>dispatch(setBasic(e))} 
                    value={basic.bathrooms? basic.bathrooms: ''}   
                    className="form-select form-select-lg" 
                    id="pr-education-level" 
                >
                    <option selected>Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">3+</option>
                </select>
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Bike parking<span className="text-danger">*</span></label>
                <select
                    name="bikeParking"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.bikeParking? basic.bikeParking: ''}   
                    className="form-select form-select-lg" 
                    id="pr-education-level" 
                >
                    <option selected>Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">3+</option>
                </select>
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Car parking<span className="text-danger">*</span></label>
                <select
                    name="carParking"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.carParking? basic.carParking: ''}      
                    className="form-select form-select-lg" 
                    id="pr-education-level"
                >
                    <option>Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">3+</option>
                </select>
                </div>
                <div className="col-lg-6 mb-4">
                <label className="form-label" htmlFor="pr-period-to">Carpet area (sq-ft only)<span className="text-danger">*</span></label>
                <input
                    name="carpetArea"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.carpetArea? basic.carpetArea: ''}      
                    className="form-control form-control-lg" 
                    type="number" 
                    id="pr-fn" 
                    placeholder="Enter carpet are in sq-ft only"
                />
                </div>
                <div className="col-lg-6 mb-4">
                <label className="form-label" htmlFor="pr-period-to">super area (sq-ft only)<span className="text-danger">*</span></label>
                <input
                    name="superArea"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.superArea? basic.superArea: ''}    
                    className="form-control form-control-lg" 
                    type="number" id="pr-fn" 
                    placeholder="Enter super are in sq-ft only"
                />
                </div>
            </div>
            <div className="form-check mb-6">
            </div>
        </div>
    )
}
export default Info;