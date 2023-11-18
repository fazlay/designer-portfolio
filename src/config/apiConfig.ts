import axios from "axios";

const baseDomain = "http://localhost:1337";
const http = axios.create({
  baseURL: `${baseDomain}/api`
});
export {http}