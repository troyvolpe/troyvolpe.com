import Terminal from "../components/Terminal/Terminal";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Terminal />

      <Link to="/portfolio">
      Explore Full Portfolio
      </Link>
    </main>
  );
}

export default Home;