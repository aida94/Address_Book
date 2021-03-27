import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import _camelCase from "lodash/camelCase";
import countryList from "react-select-country-list";

import { ContactInterface } from "model/contact";
import ContactModal from "components/Modal/Modal";
import { useStyles } from "components/Contact/style";

interface OwnProps {
  contact: ContactInterface;
}

const Contact: React.FC<OwnProps> = ({ contact }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item xs={2}>
          <Avatar className={classes.avatar}>
            {contact.name.charAt(0).toUpperCase()}
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {_camelCase(contact.name)} {_camelCase(contact.lastname)}
          </Typography>
          <Typography>{contact.email}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{countryList().getLabel(contact.country)}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>
            <IconButton aria-label="edit" onClick={() => setOpen(true)}>
              <Edit className={classes.editButton} />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
      <ContactModal
        title="Edit Contact"
        contactId={contact.id}
        open={open}
        setOpen={setOpen}
      />
    </Paper>
  );
};

export default Contact;