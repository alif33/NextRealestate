import React, { useEffect, useState } from "react";
import { getData, getUserData } from "../../../../__lib__/helpers/HttpService";
import ReferEarnCard from "./ReferEarnCard";

const AllReferAndEarn = () => {
  const [refers, setRefers] = useState([]);


  useEffect(() => {
    getData("/refers").then((res) => setRefers(res));
  }, []);

  console.log(refers);
  return (
    <secttion>
      <div className="row">
        {refers.length > 0 && refers?.map((refer,i) => <ReferEarnCard refer={refer} key={i}/>)}
      </div>
    </secttion>
  );
};

export default AllReferAndEarn;
