import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../../../store/property/actions';

function Location(){

    const dispatch = useDispatch();
    const { property }= useSelector(state=>state); 
    const { location } = property;

    return(
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 className="h4 mb-4"><i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />Location</h2>
            <div className="row">
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="pr-fn">House or Flat number<span className="text-danger">*</span></label>
                    <input
                        name="houseNumber"
                        onChange={ e=>dispatch(setLocation(e)) } 
                        value={ location.houseNumber? location.houseNumber: '' } 
                        className="form-control form-control-lg" 
                        type="text" id="pr-fn" 
                        placeholder="Enter your House/Flat number" 
                    />
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="pr-fn">Society or Project name<span className="text-danger">*</span></label>
                    <input
                        name="societyName"
                        onChange={ e=>dispatch(setLocation(e)) } 
                        value={ location.societyName? location.societyName: '' }  
                        className="form-control form-control-lg" 
                        type="text" id="pr-fn" 
                        placeholder="Enter Society or Project name"
                    />
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="pr-fn">Area name<span className="text-danger">*</span></label>
                    <input
                        name="areaName"
                        onChange={ e=>dispatch(setLocation(e)) } 
                        value={ location.areaName? location.areaName: '' }   
                        className="form-control form-control-lg" 
                        type="text" id="pr-fn" 
                        placeholder="Enter area name"
                    />
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="pr-fn">City<span className="text-danger">*</span></label>
                    <input
                        name="city"
                        onChange={ e=>dispatch(setLocation(e)) } 
                        value={ location.city? location.city: '' }   
                        className="form-control form-control-lg" 
                        type="text" id="pr-fn" 
                        placeholder="Enter city name"
                    />
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="pr-fn">State<span className="text-danger">*</span></label>
                    <input
                        name="state"
                        onChange={e=>dispatch(setLocation(e))} 
                        value={ location.state? location.state: '' }   
                        className="form-control form-control-lg" 
                        type="text" 
                        id="pr-fn" 
                        placeholder="Enter state name" 
                    />
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="pr-period-to">PIN code<span className="text-danger">*</span></label>
                    <input
                        name="pinCode"
                        onChange={e=>dispatch(setLocation(e))} 
                        value={ location.pinCode? location.pinCode: '' }   
                        className="form-control form-control-lg" 
                        type="number" 
                        id="pr-fn" 
                        placeholder="Enter pin code number" 
                    />
                </div>
            </div>
      </div>
    )
}
export default Location;