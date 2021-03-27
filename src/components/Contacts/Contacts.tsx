import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Sort from "@material-ui/icons/Sort";
import Add from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import { ContactContext } from "App";
import PaginationRounded from "components/Pagination/Pagination";
import Contact from "components/Contact/Contact";
import ContactModal from "components/Modal/Modal";
import { useStyles } from "components/Contacts/style";
import { Typography } from "@material-ui/core";
import { ContactInterface } from "model/contact";

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
  const context = useContext(ContactContext);
  const { contacts, sort, setSort } = context;

  return (
    <div className={classes.container}>
      {!contacts.length && (
        <Typography>
          <h2 className={classes.noData}>No data</h2>
        </Typography>
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
        {contacts.map((contact: ContactInterface) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>

      <IconButton
        aria-label="search"
        className={classes.addButton}
        onClick={() => setOpen(true)}
      >
        <Add />
      </IconButton>
      <ContactModal title="Create Contact" open={open} setOpen={setOpen} />

      {contacts.length > 0 && <PaginationRounded />}
    </div>
  );
};

export default ContactList;
