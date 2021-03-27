import { useState, useEffect } from "react";
import { contactList } from "data/contactList";
import { ContactInterface } from "model/contact";

export const useContact = () => {
  // const contactsStorage = localStorage.getItem("contactsStorage");
  const [contacts, setContacts] = useState<ContactInterface[]>(contactList);
  const [sort, setSort] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const count = Math.ceil(contacts.length / 5);

  // useEffect(() => {
  //   if (contactsStorage) {
  //     setContacts(JSON.parse(contactsStorage));
  //   }
  // }, [contactsStorage]);

  // useEffect(() => {
  //   localStorage.setItem("contactsStorage", JSON.stringify(contacts));
  // }, [contacts]);

  useEffect(() => {
    const sortASC = contactList.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortASC);
  }, [sort]);

  return {
    contacts,
    sort,
    setSort,
    count,
    page,
    setPage,
  };
};
