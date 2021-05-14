import {
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "assets/img/logo.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExpandableSearchBar from "components/ExpandableSearchBar";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flutterLogo: {
    height: 37,
  },
  leftContent: {
    flexGrow: 1,
  },
  iconButtonsRow: {
    display: "inline-block",
    marginRight: 10,
    marginLeft: 10,
  },
  linksRow: {
    display: "inline-block",
  },
  link: {
    marginLeft: "1.5rem",
    verticalAlign: "bottom",
    "&:hover": {
      textDecoration: "none",
    },
  },
  getStartedButton: {
    borderRadius: 0,
    boxShadow: "none",
    textTransform: "none",
    "&:hover": {
      boxShadow: "none",
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.leftContent}>
            <img className={classes.flutterLogo} src={logo} />
          </div>
          <div>
            <Typography className={classes.linksRow} color={"textPrimary"}>
              <Link className={classes.link} color={"inherit"} href="#">
                Docs
              </Link>
              <Link className={classes.link} color={"inherit"} href="#">
                Showcase
              </Link>
              <Link className={classes.link} color={"inherit"} href="#">
                Community
              </Link>
            </Typography>
            <div className={classes.iconButtonsRow}>
              <ExpandableSearchBar />
              <IconButton aria-label="View twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="View youtube">
                <YouTubeIcon />
              </IconButton>
              <IconButton aria-label="View github">
                <GitHubIcon />
              </IconButton>
            </div>
            <Button
              variant="contained"
              color="secondary"
              className={classes.getStartedButton}
              size="large"
            >
              Get Started
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Home;
