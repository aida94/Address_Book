import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 700,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  editButton: {
    color: theme.palette.secondary.main,
  },
}));
