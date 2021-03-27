import React from "react";

import Search from "components/Search/Search";
import ContactList from "components/Contacts/Contacts";
import { useStyles } from "pages/Home/style";

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <h1 className={classes.title}>Adress Book</h1>

      <Search />
      <ContactList />
    </div>
  );
};

export default Home;
