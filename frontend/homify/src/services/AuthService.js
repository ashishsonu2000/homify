import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/v1/auth"

export const loginAPICall = (loginObj) => axios.post(AUTH_REST_API_BASE_URL + '/signin', loginObj);