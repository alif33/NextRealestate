import React from "react";
import dateFormat from "dateformat";
import { Trash } from "react-feather";
import Cookies from "universal-cookie";
import { getData, removeData } from "../../../../__lib__/helpers/HttpService";
import toast from "react-hot-toast";

const ReferEarnCard = ({ refer, setRefers }) => {
  const cookies = new Cookies();
  
  const hanndleRemove = async (id) => {
    const admin = cookies.get('_admin')
      removeData(`/admin/refer/${id}`, admin.token)
      .then(res => {
        if (res.success) {
          getData('/refers')
          .then(res => setRefers({isLoading: false, dataList: res}))
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
          <div className="d-flex justify-content-between">
            <div className="w-75 pe-2">
              <div className="d-flex justify-content-between">
                <h6 className="card-title">
                  {refer._name} <small className="text-success">Client</small>
                </h6>
                <h6 className="text-warning">{dateFormat(refer.createdAt, "mmm d, yyyy")}</h6>
              </div>
              <h6 className="card-title mb-1">Phone: {refer._phone}</h6>
              <p className="card-text">{refer.message}</p>
            </div>
            <div className="w-25 border-start px-2 d-flex justify-content-between">
              <div className="border-end">
              <h6 className="card-title mb-1">
                {refer.name_} <small className="text-success">Referral</small>
              </h6>
              <h6 className="card-title">Phone: {refer.phone_}</h6>
              </div>
              <div>
                <button 
                onClick={() => hanndleRemove(refer._id)}
                className="btn btn-danger"><Trash size={18}/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferEarnCard;
