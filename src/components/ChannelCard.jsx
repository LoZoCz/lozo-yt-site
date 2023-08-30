import { demoProfilePicture, demoChannelTitle } from "../utils/constans";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export const ChannelCard = ({ channelDetail }) => {
  const location = useLocation();

  console.log(channelDetail);
  return (
    <Link
      to={
        location.pathname === "/lozo-yt-site/" ||
        location.pathname === "/lozo-yt-site"
          ? `/lozo-yt-site/channel/${channelDetail?.id?.channelId}`
          : ""
      }
      className="flex justify-center items-center flex-col gap-4"
      style={{
        cursor:
          location.pathname === "/lozo-yt-site/" ||
          location.pathname === "/lozo-yt-site"
            ? "pointer"
            : "auto",
      }}
    >
      <img
        src={
          channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
        }
        alt={
          channelDetail?.snippet?.channelTitle ||
          channelDetail?.snippet?.localized?.title
        }
        className="w-1/2 aspect-square rounded-full"
      />
      <h1 className="text-center text-2xl font-semibold">
        {channelDetail?.snippet?.channelTitle ||
          channelDetail?.snippet?.localized?.title ||
          demoChannelTitle}{" "}
        <FontAwesomeIcon icon={faCheckCircle} className="text-sm" />
      </h1>
      {channelDetail?.statistics?.subscriberCount && (
        <p>
          {parseInt(
            channelDetail?.statistics?.subscriberCount,
          ).toLocaleString()}{" "}
          subscribes
        </p>
      )}
    </Link>
  );
};

ChannelCard.propTypes = {
  channelDetail: PropTypes.object,
};
