import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBooks = async (term) => {
  const url = `https://www.googleapis.com/books/v1//volumes/${term}?key=AIzaSyBB0PK-DfJRAhT9sKlxg8cG_gSywjTAhX0`;
  const response = await axios.get(url);
  return response.data;
};

const useBookSearchSpecific = (term) => {
  return useQuery({
    queryKey: ["booksSearch", term],
    queryFn: () => fetchBooks(term),
  });
};

export default useBookSearchSpecific;
