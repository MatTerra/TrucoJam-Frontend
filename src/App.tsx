import { Router } from "@reach/router";
import Home from "pages";
import { Menu } from "pages/Menu";
import { Room } from "pages/Room";
import { Join } from "pages/Join";

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <Menu path="/menu" />
      <Join path="/join" />
      <Room path="/room/:roomId" />
    </Router>
  );
}
