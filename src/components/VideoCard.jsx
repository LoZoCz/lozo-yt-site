import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(snippet);
  return (
    <Link
      to={videoId ? `/lozo-yt-site/video/${videoId}` : demoVideoUrl}
      className="flex flex-col"
    >
      <div className="img-box w-full h-3/5">
        <img
          src={
            snippet?.thumbnails?.high?.url.replace(/ =>/g, ":") ||
            demoThumbnailUrl
          }
          alt={snippet?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="content py-3 px-1">
        <h3 className="text-l font-semibold px-4">
          {snippet?.title.slice(0, 60) || demoVideoTitle}
        </h3>
        <p className="text-sm px-4 mt-3">
          {snippet?.channelTitle || demoChannelTitle}{" "}
          <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
        </p>
      </div>
    </Link>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};
