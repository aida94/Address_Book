import React, { useState, useEffect, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Sort from "@material-ui/icons/Sort";
import Add from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import { Typography } from "@material-ui/core";

import { ContactContext } from "App";
import { ContactInterface } from "model/contact";
import { Constant } from "model/constant";
import PaginationRounded from "components/Pagination/Pagination";
import Contact from "components/Contact/Contact";
import ContactModal from "components/Modal/Modal";
import { useStyles } from "components/Contacts/style";

function paginate(
  contacts: ContactInterface[],
  page_size: number,
  page_number: number
) {
  return contacts.slice((page_number - 1) * page_size, page_number * page_size);
}

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[700],
    boxShadow: theme.shadows[1],
  },
}))(Tooltip);

const ContactList: React.FC = () => {
  const classes = useStyles();
  const context = useContext(ContactContext);
  const { contacts, setSearchTerm } = context;
  const [open, setOpen] = useState<boolean>(false);
  const [sort, setSort] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [sortedContacts, setSortedContacts] = useState(contacts);
  const count = Math.ceil(contacts.length / Constant.PAGE_SIZE);

  useEffect(() => {
    const sortASC = contacts.sort((a: ContactInterface, b: ContactInterface) =>
      a.name.localeCompare(b.name)
    );

    if (!sort) {
      const sortDESC = contacts.sort(
        (a: ContactInterface, b: ContactInterface) =>
          b.name.localeCompare(a.name)
      );
      setSortedContacts(sortDESC);
      return;
    }

    setSortedContacts(sortASC);
  }, [contacts, sort]);

  const handleAddClick = () => {
    setSearchTerm("");
    setOpen(true);
  };

  const paginatedContacts = paginate(sortedContacts, Constant.PAGE_SIZE, page);

  return (
    <div className={classes.container}>
      {!contacts.length && (
        <Typography className={classes.noData}>No data</Typography>
      )}

      {contacts.length > 0 && (
        <div className={classes.sort}>
          <LightTooltip title="Sort By Name" placement="top-start">
            <IconButton aria-label="search" onClick={() => setSort(!sort)}>
              <Sort />
            </IconButton>
          </LightTooltip>
        </div>
      )}

      <div className={classes.contactList}>
        {paginatedContacts.map((contact: ContactInterface) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>

      <IconButton
        aria-label="search"
        className={classes.addButton}
        onClick={handleAddClick}
      >
        <Add />
      </IconButton>
      <ContactModal title="Create Contact" open={open} setOpen={setOpen} />

      {contacts.length > 0 && (
        <PaginationRounded count={count} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default ContactList;
