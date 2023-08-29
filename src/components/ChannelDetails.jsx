import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Videos } from "./Videos";
import { ChannelCard } from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFrom";
export const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVidoes, setChannelVidoes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setChannelVidoes(data?.items);
      },
    );
  }, [id]);

  console.log(channelDetail);

  return (
    <main className="h-full bg-neutral-900 text-white flex items-center justify-center flex-col">
      <div
        className="bg-gradient-to-tr from-pink-400 to-blue-600 w-full"
        style={{ height: "30vh" }}
      ></div>
      <div
        className="channel-info w-1/3"
        style={{ transform: "translateY(-6rem)" }}
      >
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <Videos videos={channelVidoes} padding="8rem" columns={4} />
    </main>
  );
};
