import Link from "../components/link";
import Section from "../components/section";

const Art = () => {
  return (
    <>
      <div className="flex justify-end pb-2 pr-2">
        <div className="mr-4">
          <Link href="/">🤙 Hey!</Link>
        </div>

        <Link href="https://soundcloud.com/fluncle">👨‍🎤 My music</Link>
      </div>

      <Section>
        <div className="grid grid-cols-3">
          <img className="rounded" src="/art/directions.jpg" />
          <img className="rounded" src="/art/dont-cry.jpg" />
          <img className="rounded" src="/art/drops.jpg" />
          <img className="rounded" src="/art/forgotten.jpg" />
          <img className="rounded" src="/art/gloom.jpg" />
          <img className="rounded" src="/art/infinity.jpg" />
          <img className="rounded" src="/art/prufung.jpg" />
          <img className="rounded" src="/art/rainy-days.jpg" />
          <img className="rounded" src="/art/terminus.jpg" />
          <img className="rounded" src="/art/the-cave-II.jpg" />
          <img className="rounded" src="/art/the-portal.jpg" />
          <img className="rounded" src="/art/unknown.jpg" />
        </div>
      </Section>
    </>
  );
};

export default Art;
