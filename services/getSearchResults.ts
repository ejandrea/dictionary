import axios from "axios";
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const getSearchResults = async (word: string) => {
    const response = await axios.get(`${BASE_URL}/${word}`)
    return response
}

export default getSearchResults;    