/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    
    getUser: function () {
        return axios.get("/api/users/login");
     },
  
    getAllUsers: function () {
        return axios.get("/api/users")
     },

    logout: function () {
        return axios.get("/api/users/logout")
    }

};