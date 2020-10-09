import axios from 'axios';

export const USER_API_BASE_URL = 'http://10.113.52.214:8000/api/';

class axiosInstance {

    login(credentials){
        return axios.post(USER_API_BASE_URL + "auth/login/", credentials);
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getAuthHeader() {
        
       return {headers: {Authorization: 'JWT ' + this.getUserInfo().token }};
    }
    getUsers() {
        return axios.get(USER_API_BASE_URL + 'users/')
    }
    getProfile(){
        return axios.get(USER_API_BASE_URL + 'users/'+this.getUserInfo().user.pk+'/',this.getAuthHeader());
    }
    logOut() {
        
        localStorage.removeItem("userInfo");
        localStorage.removeItem("category");
        localStorage.removeItem("profilePicture");
        localStorage.removeItem("firstname");
        console.log("Category: ",localStorage.getItem("category"));
        console.log("UserInfo: ",localStorage.getItem("userInfo"));
        
        return axios.post(USER_API_BASE_URL + 'auth/logout/');
    }
   
}

export default new axiosInstance();
