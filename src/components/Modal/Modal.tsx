import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import countryList from "react-select-country-list";
import { useFormik } from "formik";
import * as yup from "yup";

import { ContactContext } from "App";
import ContactForm from "components/Form/Form";
import { useStyles } from "components/Modal/style";
import { ContactInterface } from "model/contact";

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
  const context = useContext(ContactContext);
  const { contacts, onSave, onDelete } = context;
  const editContact = contacts.find(
    (contact: ContactInterface) => contact.id === contactId
  );

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
          id: 0,
          name: "",
          lastname: "",
          email: "",
          country: "",
          countryLabel: "",
        },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.countryLabel = countryList().getLabel(values.country);

      onSave(values);
      setOpen(false);
      formik.resetForm();
    },
  });

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        <Typography className={classes.title}>{title}</Typography>
      </DialogTitle>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <DialogContent dividers className={classes.modalContent}>
          <ContactForm formik={formik} />
        </DialogContent>
        <DialogActions>
          {contactId && (
            <Button
              onClick={() => onDelete(contactId)}
              size="large"
              className={classes.delete}
            >
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
