// const ImageListContainer2 = props => {
//   // console.log(props);
//   const { saludo, myimg, idx } = props;
//   return (
//     <>
//       <h1>IMAGE GALLERY </h1>
//       <div className="gallery-wrapper">
//         {myimg.map((myimg, idx) => {
//           return (
//             <ImageListItem saludo={saludo} myimg={myimg} idx={idx} key={idx} />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// const ImageListItem2 = props => {
//   // console.log(props);
//   const { saludo, myimg, idx } = props;
//   return (
//     <>
//       <div className="img-container">
//         {/* <div className="hol">hola</div> */}
//         <h1>{saludo}</h1>
//         <img
//           className="img-gallery"
//           src={imgLoc + myimg + QSTRING}
//           filename={myimg}
//         />
//         <button
//           onClick={event => this.handleDelete(event, idx, myimg)}
//           index={idx}
//           className="button--del"
//         >
//           DELETE
//         </button>
//       </div>
//     </>
//   );
// };

class ImageListContainer extends Component {
  // constructor() {
  //   super();
  //   this.props.handleDelete.bind(this);
  // }
  miSaludo = event => {
    event.preventDefault();
    this.props.miSaludo(this.props.name);
    console.log("soso", event);
  };

  render() {
    const { handleDelete, saludo, myimg, idx, ...otherProps } = this.props;
    //this.handleDelete.bind(this);
    return (
      <>
        <h1>IMAGE GALLERY </h1>
        <div className="gallery-wrapper">
          <button onClick={this.miSaludo}>saludo</button>
          {myimg.map((myimg, idx) => {
            return (
              // <div className="kk">hol</div>

              <ImageListItem
                saludo={saludo}
                myimg={myimg}
                idx={idx}
                key={idx}
              />
            );
          })}
        </div>
      </>
    );
  }
}

class ImageListItem extends Component {
  // constructor() {
  //   super();
  //   this.props.handleDelete.bind(this);
  // }
  render() {
    const { handleDelete, saludo, myimg, idx, ...otherProps } = this.props;
    //this.handleDelete.bind(this);
    return (
      <>
        <div className="img-container">
          {/* <div className="hol">hola</div> */}
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
