import React, { useEffect, useState } from "react";
import { getUserData } from "../../../../__lib__/helpers/HttpService";
import ContactsCard from "./ContactsCard";
import Cookies from "universal-cookie";

const AllContacts = () => {
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
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
        <ContactsCard />
      </div>
    </secttion>
  );
};

export default AllContacts;
