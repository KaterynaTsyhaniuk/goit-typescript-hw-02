import axios from "axios";
import { Photo } from "../components/App/App.types";

const API_KEY = "a9xVQSY4IxrO0AQm_9CzqvpP-rPa6qNBiJxNsxrzuPM";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: "landscape",
  per_page: 15,
};

export const getPhotos = async (
  query: string,
  page: number
): Promise<{ results: Photo[]; total_pages: number }> => {
  const { data } = await axios.get(`search/photos?query=${query}&page=${page}`);
  return {
    results: data.results.map((photo: any) => ({
      id: photo.id,
      urls: {
        small: photo.urls.small,
        regular: photo.urls.regular,
      },
    })),
    total_pages: data.total_pages,
  };
};
