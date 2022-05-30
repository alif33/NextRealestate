import React from "react";
import dateFormat from "dateformat";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { getData, removeData } from "../../../../__lib__/helpers/HttpService";
import Cookies from "universal-cookie";


const ContactsCard = ({ data, setContacts}) => {

  const cookies = new Cookies();
  const hanndleRemove = async (id) => {
    const admin = cookies.get('_admin')
      removeData(`/admin/contact/${id}`, admin.token)
      .then(res => {
        if (res.success) {
          getData('/contacts')
          .then(res => setContacts({isLoading: false, dataList: res}))
          toast.success(res.message);
        }else{
          toast.error(res.error)
        }
      })
  }
  
  return (
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-1">
            <div className="d-flex justify-content-between">
              <h6 className="text-success py-1">{data.role}</h6>

              <h6 className="text-warning py-1">
                {dateFormat(data.createdAt, "mmm d, yyyy")}
              </h6>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <h4 className="card-subtitle text-uppercase">{data.name}</h4>
                <p className="mb-0">Phone: {data.phone}</p>
                <p className="mb-0">Email: {data.email}</p>
                <p className="card-text">{data.message}</p>
              </div>
             <div> 
               <button
               onClick={()=> hanndleRemove(data._id)}
                className="btn btn-danger">Remove</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
