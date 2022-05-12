import React, { useEffect, useState } from "react";
import { getData, getUserData } from "../../../../__lib__/helpers/HttpService";
import ContactsCard from "./ContactsCard";


const AllContacts = () => {

  const [contacts, setContacts] = useState([]);
  

  useEffect(() => {
    getData("/contacts")
    .then((res) => setContacts(res));
  }, []);

  console.log(contacts);
  return (
    <secttion>
      <div className="row">
       {contacts?.length > 0 && contacts?.map((cont, i) => <ContactsCard key={i} data={cont}/>)}
      </div>
    </secttion>
  );
};

export default AllContacts;
