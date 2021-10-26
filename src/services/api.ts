import axios from "axios";
import firebase from "firebase";

let token = "";
export const api = async () =>
  axios.create({
    baseURL: "https://backend-trucojam.herokuapp.com/v1/game",
    headers: {
      Authorization: `Bearer ${await getToken()}`,
    },
  });

const getToken = async () => {
  try {
    if (token.length === 0) {
      const fbToken = await firebase.auth().currentUser?.getIdToken();
      token = fbToken || "";
    }
    return token;
  } catch (e: any) {
    console.log(e);
    return token;
  }
};

api();

const anonymousAuthApi = axios.create({
  baseURL: "https://backend-trucojam.herokuapp.com/v1/anom",
});

export const loginAnonymous = async (nickname: string): Promise<string> => {
  try {
    const res = await anonymousAuthApi.get<{
      data: { token: string };
      message: string;
      success: boolean;
    }>("/token", { params: { name: nickname } });
    token = res.data.data.token;
    return res.data.data.token;
  } catch (e: any) {
    return e?.toString || ("" as string);
  }
};
