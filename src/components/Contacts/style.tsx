import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    flexGrow: 1,
    overflow: "hidden",
  },
  noData: {
    textAlign: "center",
    color: theme.palette.grey[500],
  },
  sort: {
    marginLeft: theme.spacing(3),
  },
  addButton: {
    float: "right",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(5),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.primary.dark,
    },
  },
}));
