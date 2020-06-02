import React, { Component } from "react";
import { storage } from "./firebase";

import { ImageUpload } from "./components/ImageUpload";
import { ImageUploadWVal } from "./components/ImageUploadWVal";
import { ImageListContainer } from "./components/ImageListContainer";
import { CircularIntegration } from "./components/CircularIntegration";
import { CustomizedSnackbars } from "./components/CustomizedSnackbars";

import { listRef, storageRef } from "./utils/config";

import "./styles.scss";

class App extends Component {
  state = {
    saludo: "Hello CodeSandbox",
    myimg: []
  };
  listImg = () => {
    // Find all the prefixes and items.
    listRef
      .listAll()
      .then(res => {
        //console.log("List working");
        const imgLocations = res.items.map(item => {
          return item.location.path.substr(7); //se remueve el "images/"
        });
        return this.setState({ myimg: imgLocations });
      })
      .catch(function(error) {
        console.log("Uh-oh, an error occurred!", error);
      });
  };
  handleDelete = (event, idx, myimg) => {
    // console.log(this.state);
    // console.log("idx", idx);
    // console.log("name", myimg);
    event.preventDefault();
    this.setState({ saludo: "bybebe" });
    // console.log("handle", event);
    const desertRef = storageRef.child(`images/${myimg}`);
    // const desertRef = storageRef.child(`images/zaraza`);

    const delImgfromState = () => {
      // console.log("fkidx", idx);
      this.setState({ saludo: "ILOVEU" });
      this.setState({ saludo: "fromidx" });
      this.setState({
        myimg: this.state.myimg.filter((_, i) => {
          return i !== idx;
        })
      });
    };
    // Delete the file
    desertRef
      .delete()
      .then(() => {
        delImgfromState();
        // console.log(this.state);
        console.log("File deleted successfully");
      })
      .catch(function(error) {
        // Uh-oh, an error occurred!
        console.log("Uh-oh, an error occurred!");
      });
  };
  miSaludo = name => {
    // event.preventDefault();
    console.log("saludo", name);
  };

  componentDidMount() {
    this.listImg();
    // console.log("dd", this.listImg());
  }
  render() {
    const { saludo, myimg } = this.state;
    const { handleDelete } = this;
    return (
      <div className="App">
        <h1>{saludo}</h1>
        {/* <h2>Start editing to see some magic happen!</h2> */}
        <p>
          <button onClick={handleDelete}> DELETE BUTTON</button>
        </p>
        {/* <div>
          <CircularIntegration />
        </div>
        <hr />
        <ImageUploadWVal />

        <hr /> */}
        <ImageUpload />
        <hr />
        <CustomizedSnackbars />
        <hr />

        <ImageListContainer
          saludo={saludo}
          myimg={myimg}
          handleDelete={this.handleDelete}
          miSaludo={this.miSaludo}
          name="john"
        />
      </div>
    );
  }
}

export default App;
