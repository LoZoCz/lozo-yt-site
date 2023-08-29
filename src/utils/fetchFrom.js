import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "snippet,id",
    regionCode: "US",
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "faf6b0a8e0mshe5ddf06ed2dec09p1d2d4djsn15adb642e282",
    // import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
