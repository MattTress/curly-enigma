import axios from "axios";
import request from "../utils/request";
import requestUser, { instance } from "../utils/requestPOST";
import config from "../constants/config";
export const doLogin = ({ username, password }) => {
  return request(`/api/auth/login`, {
    method: "POST",
    params: {
      username,
      password,
    },
  });
};





export const getMyUser = () => {
  return request(`/api/auth/user-info`, {});
};
