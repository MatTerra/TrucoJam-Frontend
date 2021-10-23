import axios from "axios";
import firebase from "firebase";

export const api = async () =>
  axios.create({
    baseURL: "https://backend-trucojam.herokuapp.com/v1/game",
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  });

const getToken = async () => {
  try {
    const token = firebase.auth().currentUser?.getIdToken();
    return token || "";
  } catch (e: any) {
    console.log(e);
    return "";
  }
};

api();
