import React, { Component } from "react";
import { imgLoc, QSTRING } from "../../utils";

class ImageListItem extends Component {
  handleDelete = (event, idx, myimg) => {
    event.preventDefault();
    const datt = { event, idx, myimg };
    console.log(datt);
    console.log("props", this.props);
    //this.props.handleDelete();
    this.props.handleDelete(event, idx, myimg);
  };
  render() {
    const { handleDelete, saludo, myimg, idx, ...otherProps } = this.props;
    return (
      <>
        <div className="img-container">
          <h1>{saludo}</h1>
          <img
            className="img-gallery"
            src={imgLoc + myimg + QSTRING}
            filename={myimg}
          />
          <button
            onClick={event => this.handleDelete(event, idx, myimg)}
            index={idx}
            className="button--del"
          >
            DELETE
          </button>
        </div>
      </>
    );
  }
}

export default ImageListItem;
