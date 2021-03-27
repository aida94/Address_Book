import React from "react";

import "App.css";
import { useContact } from "controller/useContact";
import Home from "pages/Home/Home";

export const ContactContext = React.createContext("" as any);

const App: React.FC = () => {
  const {
    contacts,
    sort,
    setSort,
    searchTerm,
    setSearchTerm,
    onSave,
    onDelete,
  } = useContact();

  return (
    <div className="App">
      <ContactContext.Provider
        value={{
          contacts,
          sort,
          setSort,
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
