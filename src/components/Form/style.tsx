import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  formInput: {
    marginBottom: theme.spacing(2),
  },
  inputError: {
    color: theme.palette.error.light,
  },
}));
