import React, { useEffect, useState } from "react";
import { getUserData } from "../../../../__lib__/helpers/HttpService";
import Cookies from "universal-cookie";
import ReferEarnCard from "./ReferEarnCard";

const AllReferAndEarn = () => {
  const cookie = new Cookies();
  const [contacts, setContacts] = useState([]);
  const admin = cookie.get("_admin");

  useEffect(() => {
    getUserData("/admin/contacts", admin.token).then((res) => setContacts(res));
  }, []);

  console.log(contacts);
  return (
    <secttion>
      <div className="row">
        <ReferEarnCard/>
        <ReferEarnCard/>
        <ReferEarnCard/>
        <ReferEarnCard/>
        <ReferEarnCard/>
        <ReferEarnCard/>
        <ReferEarnCard/>
        <ReferEarnCard/>
      </div>
    </secttion>
  );
};

export default AllReferAndEarn;
