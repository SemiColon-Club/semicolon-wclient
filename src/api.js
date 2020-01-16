import axios from "axios";

import { getToken } from "./helper";

axios.defaults.baseURL = "http://localhost:3001";

function setHeader() {
    axios.defaults.headers.common['Authorization'] = getToken();
}

export async function login(email, password) {
    return await axios.post("login", {email, password});
}