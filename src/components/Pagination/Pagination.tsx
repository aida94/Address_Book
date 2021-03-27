import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

interface OwnProps {
  count: number;
  page: number;
  setPage: (page: number) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
  },
}));

const PaginationRounded: React.FC<OwnProps> = ({ count, page, setPage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        shape="rounded"
        page={page}
        onChange={(e, page) => setPage(page)}
      />
    </div>
  );
};

export default PaginationRounded;
