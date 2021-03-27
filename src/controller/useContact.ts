import { useState, useEffect } from "react";
import { contactList } from "data/contactList";
import { ContactInterface } from "model/contact";
import useDebounce from "controller/useDebounce";

enum Constant {
  CONTACTS_STORAGE = "contactsStorage",
}

function filterByValue(array: any, string: string) {
  return array.filter((o: any) =>
    Object.keys(o).some((k) =>
      o[k].toLowerCase().includes(string.toLowerCase())
    )
  );
}

export const useContact = () => {
  const contactsStorage = localStorage.getItem(Constant.CONTACTS_STORAGE);
  const [contacts, setContacts] = useState<ContactInterface[]>(contactList);
  const [sort, setSort] = useState<boolean>(true);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filterContacts = filterByValue(contactList, debouncedSearchTerm);

      setContacts(filterContacts);
      return;
    }

    setContacts(contactList);
  }, [debouncedSearchTerm]);

  // useEffect(() => {
  //   if (contactsStorage) {
  //     setContacts(JSON.parse(contactsStorage));
  //   }
  // }, [contactsStorage]);

  // useEffect(() => {
  //   localStorage.setItem(Constant.CONTACTS_STORAGE, JSON.stringify(contacts));
  // }, [contacts]);

  useEffect(() => {
    const sortASC = contactList.sort((a, b) => a.name.localeCompare(b.name));

    if (!sort) {
      const sortDESC = contactList.sort((a, b) => b.name.localeCompare(a.name));
      setContacts(sortDESC);
      return;
    }

    setContacts(sortASC);
  }, [sort]);

  return {
    contacts,
    sort,
    setSort,
    searchTerm,
    setSearchTerm,
  };
};
