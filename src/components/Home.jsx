import { useState, useEffect } from "react";
import { SideBar } from "./SideBar";
import { Videos } from "./Videos";
import { fetchFromAPI } from "../utils/fetchFrom";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <main className="flex p-1 gap-4 bg-neutral-900 text-white h-full">
      <SideBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <section className="p-2 flex-1">
        <h1 className="text-4xl font-semibold pb-5">
          <span>{selectedCategory} </span>
          <span className="text-red-600">videos</span>
        </h1>

        <Videos videos={videos} columns={4} />
      </section>
    </main>
  );
};
