import { storage } from "../firebase";

let storageRef = storage.ref();
let imagesRef = storageRef.child("images");
let listRef = storageRef.child("/images");

const BASE_URL = "https://firebasestorage.googleapis.com/v0/b/";
const MYAPP_URL = "mycrwn-db-1fe39.appspot.com/o/images%2F";
const QSTRING = "?alt=media";
let singleImg = "1366_2000.jpg";

const imgLoc = BASE_URL + MYAPP_URL;
const imgFake = BASE_URL + MYAPP_URL + singleImg + QSTRING;

export {
  storageRef,
  imagesRef,
  listRef,
  BASE_URL,
  MYAPP_URL,
  QSTRING,
  imgLoc,
  imgFake
};
