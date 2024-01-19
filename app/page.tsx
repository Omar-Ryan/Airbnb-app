import Banner from "./components/Banner";
import LiveAny from "./components/liveAnywhere/LiveAny";
import Explore from "./components/explore/Explore";

export default function Home() {
  return (
    <main>
      <Banner />
      <Explore />
      <LiveAny />
    </main>
  );
}
