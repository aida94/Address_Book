import React, { useMemo } from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import countryList from "react-select-country-list";

import { useStyles } from "components/Form/style";

interface OwnProps {
  formik: any;
}

const ContactForm: React.FC<OwnProps> = ({ formik }) => {
  const classes = useStyles();
  const countryOptions = useMemo(() => countryList().getData(), []);

  return (
    <>
      <Grid container>
        <Grid item xs={10}>
          <FormControl fullWidth className={classes.formInput}>
            <TextField
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              type="text"
              label="Name"
              margin="dense"
            />
            <FormHelperText className={classes.inputError}>
              {formik.touched.name && formik.errors.name}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={10}>
          <FormControl fullWidth className={classes.formInput}>
            <TextField
              id="lastname"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              type="text"
              label="Lastname"
              margin="dense"
            />
            <FormHelperText className={classes.inputError}>
              {formik.touched.lastname && formik.errors.lastname}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={10}>
          <FormControl fullWidth className={classes.formInput}>
            <TextField
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              label="Email"
              margin="dense"
            />
            <FormHelperText className={classes.inputError}>
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={10}>
          <FormControl fullWidth className={classes.formInput}>
            <InputLabel htmlFor="country">Country</InputLabel>
            <Select
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              margin="dense"
              MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
              }}
            >
              {countryOptions.map((country) => (
                <MenuItem key={country.value} value={country.value}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>

            <FormHelperText className={classes.inputError}>
              {formik.touched.country && formik.errors.country}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
