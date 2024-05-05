import { Metadata } from "next";
import { SearchPage } from "./SearchPage";

export const metadata: Metadata = {
  title: "Search | Image gallery",
};

const Search = () => {
  return <SearchPage />;
};

export default Search;
