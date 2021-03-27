import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { ContactContext } from "App";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
  },
}));

const PaginationRounded: React.FC = () => {
  const classes = useStyles();
  const context = useContext(ContactContext);
  const { count, page, setPage } = context;

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
