import { LOGIN_AUTH_ENABLED } from 'utils/developerConfig';

export function getToken() {
    if(LOGIN_AUTH_ENABLED)
      return localStorage.getItem("token");
    else
      return {};
  }
  
  export function setToken(token) {
    localStorage.setItem("token", token);
  }
  
  export function setEmail(email) {
    localStorage.setItem("email", email);
  }
  
  export function getEmail() {
    return localStorage.getItem("email");
  }
  
  export function removeToken() {
    localStorage.removeItem("token");
  }
  
  export function setCsrId(CsrId) {
    localStorage.setItem("CsrId", CsrId);
  }
  
  export function getCsrId(retVal) {
    if(LOGIN_AUTH_ENABLED)
      return localStorage.getItem("CsrId");
    else
      return retVal;
  }
  
  export function removeCsrId() {
    localStorage.removeItem("CsrId");
  }
  
  export function getAdminToken() {
    if(LOGIN_AUTH_ENABLED)
      return localStorage.getItem("admintoken");
    else
      return {};
  }
  
  export function setAdminToken(admintoken) {
    localStorage.setItem("admintoken", admintoken);
  }
  
  export function removeAdminToken() {
    localStorage.removeItem("admintoken");
  }