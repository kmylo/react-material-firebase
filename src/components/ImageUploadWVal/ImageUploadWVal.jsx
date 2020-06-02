//ImageUploadWVal

import React, { Component } from "react";
import { storage } from "../../firebase";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

let storageRef = storage.ref();
let imagesRef = storageRef.child("images");
let listRef = storageRef.child("/images");

const useStyles = theme => ({
  root: {
    maxWidth: 345
  },
  info: {
    textAlign: "left"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class ImageUploadWVal extends Component {
  render() {
    const { classes } = this.props;
    //console.log("props", this.props);
    return (
      <Card className={classes.root}>
        {/* <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="IMAGE Uploader"
          subheader="September 14, 2020"
        /> */}
        <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/paella.jpg"
          title="uploaded"
        />
        <CardContent className={classes.info}>
          <Typography variant="body2" color="textSecondary" component="p">
            Form-Upload PREVIEW
          </Typography>
          <hr />
          Image to the Gallery needs:
          <ul>
            <li>be JPEG or PNG</li>
            <li>have Width ≤ px</li>
            <li>have Height ≤ px</li>
            <li>have Size ≤ kb</li>
          </ul>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton className={classes.expand} aria-label="show more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(useStyles)(ImageUploadWVal);
