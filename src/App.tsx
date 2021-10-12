import { Router } from "@reach/router";
import Home from "pages";
import { Menu } from "pages/Menu";

export default function App() {
  return (
    <Router>
      <Home path="/" />
      <Menu path="/menu" />
    </Router>
  );
}
