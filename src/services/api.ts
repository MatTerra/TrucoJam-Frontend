import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-trucojam.herokuapp.com/v1/game",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});
