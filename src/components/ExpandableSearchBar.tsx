import React, { useState, useRef, useEffect } from "react";
import { IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(function (theme) {
  return {
    searchBarOpened: {
      outline: "#C0E1FF solid 3px",
    },
    searchInput: {
      border: "none",
      verticalAlign: "middle",
      transition: "width .35s ease-in-out",
      fontSize: 16,
      "&:focus": {
        outline: "none",
      },
    },
    searchInputClosed: {
      width: 0,
      padding: 0,
    },
    searchInputOpened: {
      width: 200,
    },
  };
});

function ExpandableSearchBar() {
  const classes = useStyles();
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [searchInputOpen, setSearchInputState] = useState(false);

  function onClick() {
    setSearchInputState(!searchInputOpen);
    let inputElement = inputRef.current;
    inputElement?.focus();
  }

  function onClickOut() {
    if (searchInputOpen) {
      setSearchInputState(false);
    }
  }

  return (
    <div className="component-wrapper">
      <div className={searchInputOpen ? classes.searchBarOpened : ""}>
        <IconButton onClick={onClick} aria-label="Search">
          <SearchIcon />
        </IconButton>
        <input
          className={[
            classes.searchInput,
            searchInputOpen
              ? classes.searchInputOpened
              : classes.searchInputClosed,
          ].join(" ")}
          ref={inputRef}
          onBlur={onClickOut}
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default ExpandableSearchBar;
