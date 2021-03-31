import { useState, useEffect } from "react";

import { ContactInterface } from "model/contact";
import useDebounce from "controller/useDebounce";
import { Constant } from "model/constant";

function filterByValue(array: any, value: string) {
  return array.filter((o: any) =>
    Object.keys(o).some((k) => o[k].toLowerCase().includes(value.toLowerCase()))
  );
}

export const useContact = () => {
  const storage = localStorage.getItem(Constant.CONTACTS_STORAGE);
  const [contacts, setContacts] = useState<ContactInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const filterContacts = filterByValue(contacts, debouncedSearchTerm);

      setContacts(filterContacts);
      return;
    }

    if (storage) {
      setContacts(JSON.parse(storage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (storage) {
      setContacts(JSON.parse(storage));
    }
  }, [storage]);

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
    const newContacts = contacts.filter((contact) => contact.id !== id);

    localStorage.setItem(
      Constant.CONTACTS_STORAGE,
      JSON.stringify(newContacts)
    );
    setContacts(newContacts);
  };

  return {
    contacts,
    setContacts,
    searchTerm,
    setSearchTerm,
    onSave,
    onDelete,
  };
};
