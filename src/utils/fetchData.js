import axios from "axios"

export const apiForHeadlines =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=ebb830aafe444b47b80106e3991fbcc5";

export const fetchData = (url) => {
    const data = axios.get(url)
    return data;
}