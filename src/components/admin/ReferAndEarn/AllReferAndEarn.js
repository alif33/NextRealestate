import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { getData, getUserData } from "../../../../__lib__/helpers/HttpService";
import ReferEarnCard from "./ReferEarnCard";

const AllReferAndEarn = () => {
  const [refers, setRefers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#27d37f");

  useEffect(() => {
    getData("/refers").then((res) => setRefers(res));
  }, []);

  return (
    <secttion>
      <div className="row">
        {refers.length > 0 ? (
          refers?.map((refer, i) => <ReferEarnCard refer={refer} key={i} />)
        ) : (
          <div className="p-4">
            <div className="d-flex justify-content-center align-items-center">
              <GridLoader color={color} loading={loading} size={8} />
            </div>
          </div>
        )}
      </div>
    </secttion>
  );
};

export default AllReferAndEarn;
