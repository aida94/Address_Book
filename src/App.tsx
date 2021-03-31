import React, { useEffect } from "react";

import "App.css";
import { contactList } from "data/contactList";
import { Constant } from "model/constant";
import { useContact } from "controller/useContact";
import Home from "pages/Home/Home";

export const ContactContext = React.createContext("" as any);

const App: React.FC = () => {
  const storage = localStorage.getItem(Constant.CONTACTS_STORAGE);
  const {
    contacts,
    setContacts,
    searchTerm,
    setSearchTerm,
    onSave,
    onDelete,
  } = useContact();

  useEffect(() => {
    if (!storage) {
      localStorage.setItem(
        Constant.CONTACTS_STORAGE,
        JSON.stringify(contactList)
      );
      setContacts(contactList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storage]);

  return (
    <div className="App">
      <ContactContext.Provider
        value={{
          contacts,
          searchTerm,
          setSearchTerm,
          onSave,
          onDelete,
        }}
      >
        <Home />
      </ContactContext.Provider>
    </div>
  );
};

export default App;
