import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    float: "right",
    marginRight: theme.spacing(5),
  },
}));

const Search: React.FC = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.search}>
      <TextField
        id="search"
        placeholder="Search"
        size="medium"
        margin="normal"
        // autoFocus
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
