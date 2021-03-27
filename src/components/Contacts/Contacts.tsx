import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Sort from "@material-ui/icons/Sort";
import Add from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import { contactList } from "data/contactList";
import PaginationRounded from "components/Pagination/Pagination";
import Contact from "components/Contact/Contact";
import ContactModal from "components/Modal/Modal";
import { useStyles } from "components/Contacts/style";
import { Typography } from "@material-ui/core";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[700],
    boxShadow: theme.shadows[1],
  },
}))(Tooltip);

const ContactList: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<boolean>(true);
  const [contacts, setContacts] = useState(contactList);

  useEffect(() => {
    if (sort) {
      const sortedContacts = contacts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      console.log(1, sortedContacts);
      setContacts(sortedContacts);
    } else {
      const sortedContacts = contacts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );

      console.log(2, sortedContacts);
      setContacts(sortedContacts);
    }
  }, [contacts, sort]);

  return (
    <div className={classes.container}>
      {contacts.length > 0 && (
        <div className={classes.sort}>
          <LightTooltip title="Sort By Name" placement="top-start">
            <IconButton aria-label="search" onClick={() => setSort(!sort)}>
              <Sort />
            </IconButton>
          </LightTooltip>
        </div>
      )}

      {!contacts.length && (
        <Typography>
          <h2 className={classes.noData}>No data</h2>
        </Typography>
      )}

      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}

      <IconButton
        aria-label="search"
        className={classes.addButton}
        onClick={() => setOpen(true)}
      >
        <Add />
      </IconButton>

      <ContactModal title="Create Contact" open={open} setOpen={setOpen} />

      {contacts.length > 0 && (
        <PaginationRounded
          count={Math.ceil(contactList.length / 5)}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default ContactList;
