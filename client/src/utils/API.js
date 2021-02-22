import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&apikey=KEY_HERE";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
