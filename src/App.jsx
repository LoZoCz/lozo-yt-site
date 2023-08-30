import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components/import";
export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/lozo-yt-site" element={<Home />} />
        <Route path="/lozo-yt-site/video/:id" element={<VideoDetails />} />
        <Route path="/lozo-yt-site/channel/:id" element={<ChannelDetails />} />
        <Route
          path="/lozo-yt-site/search/:searchTerm"
          element={<SearchFeed />}
        />
      </Routes>
    </Router>
  );
};
