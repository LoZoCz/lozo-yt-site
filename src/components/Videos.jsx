import PropTypes from "prop-types";
import { VideoCard } from "./VideoCard";
import { ChannelCard } from "./ChannelCard";
import { useState, useEffect } from "react";
export const Videos = ({ videos, padding, columns, recommended }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    console.log(windowWidth, columns);
    // Oczyść nasłuchiwanie przy wyjściu z komponentu
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!videos?.length) return "Loading...";

  return (
    // flex flex-wrap gap-2
    <div
      className="grid gap-6"
      style={{
        paddingInline: `${padding}`,
        gridTemplateColumns: `repeat(${
          recommended
            ? windowWidth > 760
              ? columns
              : columns + 1
            : windowWidth > 760
            ? columns
            : columns - 2
        }, minmax(0, 1fr))`,
      }}
    >
      {videos.map((item, idx) =>
        item.id.videoId ? (
          <div key={idx} className="bg-neutral-800 rounded-lg overflow-hidden">
            <VideoCard video={item} />
          </div>
        ) : (
          <div
            key={idx}
            className="bg-neutral-800 rounded-lg overflow-hidden flex justify-center items-center"
          >
            <ChannelCard channelDetail={item} />
          </div>
        ),
      )}
    </div>
  );
};

Videos.propTypes = {
  videos: PropTypes.array,
  padding: PropTypes.string,
  columns: PropTypes.number,
  recommended: PropTypes.number,
};
