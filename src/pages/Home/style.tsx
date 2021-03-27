import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: theme.palette.grey[100],
    marginTop: theme.spacing(5),
    width: 800,
    minHeight: 650,
    borderRadius: 30,
  },
  title: {
    textAlign: "center",
    color: theme.palette.primary.main,
  },
}));
