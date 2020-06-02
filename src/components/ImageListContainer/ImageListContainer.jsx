import React, { Component } from "react";
import { ImageListItem } from "../ImageListItem";

class ImageListContainer extends Component {
  miSaludo = event => {
    event.preventDefault();
    this.props.miSaludo(this.props.name);
    console.log("soso", event);
  };
  handleDelete = (event, idx, myimg) => {
    // event.preventDefault();
    // const datt = { event, idx, myimg };
    // console.log(datt);
    // console.log("props", this.props);
    this.props.handleDelete(event, idx, myimg);
  };

  render() {
    const { handleDelete, saludo, myimg, idx, ...otherProps } = this.props;
    return (
      <>
        <h1>IMAGE GALLERY </h1>
        <div className="gallery-wrapper">
          {myimg.map((myimg, idx) => {
            return (
              // <div className="kk">hol</div>

              <ImageListItem
                saludo={saludo}
                myimg={myimg}
                idx={idx}
                key={idx}
                handleDelete={this.handleDelete}
              />
            );
          })}
          {/* <button onClick={this.miSaludo}>saludo</button> */}
        </div>
      </>
    );
  }
}

export default ImageListContainer;
