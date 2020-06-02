import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

import Fab from "@material-ui/core/Fab";

import Icon from "@material-ui/core/Icon";

import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

const MyButton = props => {
  console.log(props);
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  const {
    btnTxt,
    color = "primary",
    startIcon,
    endIcon,
    disabled,
    hidden
  } = props;

  console.log(btnTxt, color);

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color={color}
          className={buttonClassname}
          // disabled={loading}
          startIcon={startIcon}
          endIcon={endIcon}
          disabled={disabled}
          hidden={hidden}
        >
          {btnTxt}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
};

export default MyButton;
