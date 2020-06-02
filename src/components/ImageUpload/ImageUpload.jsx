import React, { Component } from "react";
import { storage } from "../../firebase";
import { MyButton } from "../MyButton";

import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SearchIcon from "@material-ui/icons/Search";

let storageRef = storage.ref();
let imagesRef = storageRef.child("images");
let listRef = storageRef.child("/images");

class ImageUpload extends Component {
  state = {
    image: null,
    preview: null,
    url: "",
    progress: 0,
    btnupload: true
  };
  handleChange = event => {
    event.preventDefault();

    // console.log(event.target);
    if (event.target.files[0]) {
      console.log("cargado", event.target.files[0]);
      this.setState({
        preview: URL.createObjectURL(event.target.files[0])
      });
      const image = event.target.files[0];
      this.setState(() => ({ image, btnupload: false }));
      console.log("cargado", event.target.files[0]);
    }
  };
  handleUpload = event => {
    event.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };
  render() {
    const style = {
      // height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "30px"
    };
    const { progress, btnupload, preview } = this.state;
    return (
      <div style={style}>
        <progress value={progress} max="100" />

        <div>
          <button
            onClick={() => {
              console.log(this.fileInput);
              return this.fileInput.click();
            }}
          >
            dsf
          </button>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInput => {
              return (this.fileInput = fileInput);
            }}
            autoComplete="off"
            accept="image/*"
            multiple={false}
            onChange={this.handleChange}
            onFocus={e => {
              e.preventDefault();
              //console.log("touched");
              this.setState({ btnupload: true, preview: null });
              this.value = null;
              return;
            }}
            // onClick={e => {
            //   console.log("clicked");
            //   e.preventDefault();
            //   //this.value = null;
            //   return;
            // }} //this blocks the onchange
          />
        </div>
        <p>
          <button disabled={btnupload} onClick={this.handleUpload}>
            Upload
          </button>
        </p>
        <MyButton
          btnTxt={"Upload"}
          disabled={btnupload}
          startIcon={<CloudUploadIcon />}
        />
        <MyButton
          btnTxt={"Browse"}
          color={"primary"}
          onClick={() => this.fileInput.click()}
          startIcon={<SearchIcon />}
        />

        {/* <MyButton
          btnTxt={"Brr"}
          color={"secondary"}
          hidden={true}
          startIcon={<CloudUploadIcon />}
          endIcon={<Icon>send</Icon>}
        />
        <MyButton
          btnTxt={"something"}
          color={"default"}
          hidden={true}
          startIcon={<PhotoCamera />}
          endIcon={<SaveIcon />}
        /> */}
        {/* <img
          src={this.state.url || "https://via.placeholder.com/200x200"}
          alt="Uploaded images"
          height="200"
          width="auto"
        /> */}
        {/* {console.log(this.state)} */}
        {preview ? (
          <img src={preview} alt="Preview of load" height="200" width="auto" />
        ) : null}
      </div>
    );
  }
}

export default ImageUpload;
