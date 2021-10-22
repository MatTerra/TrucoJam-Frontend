import axios from "axios";
import firebase from "firebase";

let token: string = "";

export const api = () =>
  axios.create({
    baseURL: "https://backend-trucojam.herokuapp.com/v1/game",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

const getToken = () => {
  try {
    firebase
      .auth()
      .currentUser?.getIdToken()
      .then((tkn) => (token = tkn));
  } catch (e) {
    console.log(e);
  }
  return token;
};
