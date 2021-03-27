import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";

import { ContactContext } from "App";
import { useStyles } from "components/Search/style";

const Search: React.FC = (props) => {
  const classes = useStyles(props);
  const context = useContext(ContactContext);
  const { searchTerm, setSearchTerm } = context;

  return (
    <div className={classes.search}>
      <TextField
        id="search"
        placeholder="Search"
        size="medium"
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchTerm ? (
                <IconButton
                  aria-label="close"
                  onClick={() => setSearchTerm("")}
                >
                  <Close />
                </IconButton>
              ) : (
                <IconButton aria-label="search">
                  <SearchIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
