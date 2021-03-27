import { useState, useEffect } from "react";

import { contactList } from "data/contactList";
import { ContactInterface } from "model/contact";
import useDebounce from "controller/useDebounce";
import { Constant } from "model/constant";

function filterByValue(array: any, value: string) {
  console.log(array, value);
  return array.filter((o: any) =>
    Object.keys(o).some((k) => o[k].toLowerCase().includes(value.toLowerCase()))
  );
}

export const useContact = () => {
  const contactsStorage = localStorage.getItem(Constant.CONTACTS_STORAGE);
  const [contacts, setContacts] = useState<ContactInterface[]>(contactList);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filterContacts = filterByValue(contacts, debouncedSearchTerm);

      setContacts(filterContacts);
      return;
    }

    setContacts(contactList);
  }, [contacts, debouncedSearchTerm]);

  useEffect(() => {
    if (contactsStorage) {
      setContacts(JSON.parse(contactsStorage));
    }
  }, [contactsStorage]);

  const onSave = (values: ContactInterface) => {
    let newContacts = contacts;
    const existContact = contacts.find((contact) => contact.id === values.id);

    if (!existContact) {
      values.id = Date.now().toString();
      newContacts.push(values);
    } else {
      newContacts = contacts.map((contact) => {
        if (contact.id === existContact.id) {
          return values;
        }
        return contact;
      });
    }

    localStorage.setItem(
      Constant.CONTACTS_STORAGE,
      JSON.stringify(newContacts)
    );
    setContacts(newContacts);
  };

  const onDelete = (id: string) => {
    console.log(id);
    const newContacts = contacts.filter((contact) => contact.id !== id);

    localStorage.setItem(
      Constant.CONTACTS_STORAGE,
      JSON.stringify(newContacts)
    );
    setContacts(newContacts);
  };

  return {
    contacts,
    searchTerm,
    setSearchTerm,
    onSave,
    onDelete,
  };
};
