import { Router } from "@reach/router";
import Home from "pages";
import { Menu } from "pages/Menu";
import { Room } from "pages/Room";

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <Menu path="/menu" />
      <Room path="/room/:roomId" />
    </Router>
  );
}
