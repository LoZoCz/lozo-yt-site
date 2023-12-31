import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// Link
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFrom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Videos } from "./Videos";
export const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items);
      },
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading...";

  // console.log(videoDetails);

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;

  return (
    <main className="flex flex-col px-2 pb-2 gap-4 bg-neutral-900 text-white relative md:flex-row">
      <div
        className="static top-16 w-full grid md:sticky md:w-3/4"
        style={{
          gridTemplateRows: `1fr 7rem`,
          height: `calc(100vh - 6rem)`,
        }}
      >
        <div className="w-full">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            width={`100%`}
            height={`100%`}
            controls
          />
        </div>
        <div className="flex gap-4 flex-col mt-4">
          <h1 className=" text-xl font-bold md:text-3xl">{title}</h1>
          <div className="flex justify-between items-center text-sm md:text-m">
            <Link
              to={`/lozo-yt-site/channel/${channelId}`}
              className="hover:underline transition-all"
            >
              {channelTitle}{" "}
              <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
            </Link>
            <div className="flex gap-4">
              <h2>{parseInt(viewCount).toLocaleString()} views</h2>
              <h2>{parseInt(likeCount).toLocaleString()} likes</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <Videos videos={videos} columns={1} recommended={1} />
      </div>
    </main>
  );
};

// skoncz rekomendowne video i napraw niektore filym bo nie da sie ich odtworzyc
