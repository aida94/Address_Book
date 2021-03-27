import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import _uniqueId from "lodash/uniqueId";
import countryList from "react-select-country-list";
import { useFormik } from "formik";
import * as yup from "yup";

import { contactList } from "data/contactList";
import ContactForm from "components/Form/Form";
import { useStyles } from "components/Modal/style";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  lastname: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required"),
  email: yup
    .string()
    .email("Must be an valid Email")
    .required("Email is required"),
  country: yup.string().required("Country is required"),
});

interface OwnProps {
  title: string;
  contactId?: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const ContactModal: React.FC<OwnProps> = ({
  title,
  contactId,
  open,
  setOpen,
}) => {
  const classes = useStyles();
  const editContact = contactList.find((contact) => contact.id === contactId);

  const formik = useFormik({
    initialValues: editContact
      ? {
          id: editContact.id,
          name: editContact.name,
          lastname: editContact.lastname,
          email: editContact.email,
          country: editContact.country,
          countryLabel: editContact.countryLabel,
        }
      : {
          id: _uniqueId("contact_"),
          name: "",
          lastname: "",
          email: "",
          country: "",
          countryLabel: "",
        },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.countryLabel = countryList().getLabel(values.country);

      console.log(1, values);
    },
  });

  const onDelete = () => {
    console.log(contactId);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        <Typography className={classes.title}>{title}</Typography>
      </DialogTitle>
      <form noValidate autoComplete="off" onClick={formik.handleSubmit}>
        <DialogContent dividers className={classes.modalContent}>
          <ContactForm formik={formik} />
        </DialogContent>
        <DialogActions>
          {contactId && (
            <Button onClick={onDelete} size="large" className={classes.delete}>
              Delete
            </Button>
          )}

          <Button size="large" className={classes.save} type="submit">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ContactModal;
