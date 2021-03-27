import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 24,
    color: theme.palette.primary.main,
  },
  modalContent: {
    padding: theme.spacing(5),
    minWidth: 500,
  },
  formInput: {
    marginBottom: theme.spacing(2),
  },
  inputError: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.common.white,
    maxWidth: 200,
    paddingLeft: theme.spacing(1),
  },
  save: {
    fontWeight: 600,
    color: theme.palette.secondary.main,
  },
  delete: {
    fontWeight: 600,
    color: theme.palette.error.main,
  },
}));
