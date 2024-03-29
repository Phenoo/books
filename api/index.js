import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBooks = async (term) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${term}&maxResults=40&orderBy=relevance`;
  const response = await axios.get(url);
  return response.data;
};

const useBookSearch = (term) => {
  return useQuery({
    queryKey: ["books", term],
    queryFn: () => fetchBooks(term),
  });
};

export default useBookSearch;
