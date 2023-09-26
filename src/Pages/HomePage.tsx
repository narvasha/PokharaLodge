import { Gallery } from "../assets/Components/Body/Gallery";
import { Room } from "../assets/Components/Body/Rooms";
import Services from "../assets/Components/Body/Services";
import { Hero } from "../assets/Components/Body/hero";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <Room />
      <Services />

      <Gallery />
    </div>
  );
}
