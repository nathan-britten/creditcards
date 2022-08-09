import axios from "axios";
import { API_URL } from "../../config";
import qs from "query-string";

const client = axios.create({
  baseURL: API_URL,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
  withCredentials: true,
  paramsSerializer: (params) => qs.stringify(params),
});

export default client;
