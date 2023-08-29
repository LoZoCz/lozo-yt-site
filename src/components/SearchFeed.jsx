import { useState, useEffect } from "react";
import { Videos } from "./Videos";
import { fetchFromAPI } from "../utils/fetchFrom";
import { useParams } from "react-router-dom";

export const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <main className="flex bg-neutral-900 text-white h-full">
      <section className="p-2 flex-1">
        <h1 className="text-4xl font-semibold pb-5">
          <span>Search resulst for: </span>
          <span className="text-red-600">{searchTerm} </span>
          videos
        </h1>
        <Videos videos={videos} columns={4} />
      </section>
    </main>
  );
};
