import axios from "axios";

const KEY = "AIzaSyB_z7E9X4p_lJ9Wxm8NGrnj1uEH4e140Tk";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }    
})
