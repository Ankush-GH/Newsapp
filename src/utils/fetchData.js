import axios from "axios"


export const apiForHeadlines = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&q=pizza`

export const fetchData = async (url) => {
    const { data } = await axios.get(url)
    return data;
}