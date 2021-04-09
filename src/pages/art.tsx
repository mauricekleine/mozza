import Image from "next/image";

import Link from "../components/link";
import Page from "../components/page";
import Small from "../components/small";
import artCollection from "../data/art-collection";

const Art = () => (
  <Page
    subtitle={
      <>
        <p>
          My digtal collages, some of which are{" "}
          <Link href="https://opensea.io/accounts/mauricekleine">
            available as NFTs
          </Link>
          .
        </p>

        <Small>High resolution versions available upon request</Small>
      </>
    }
    title="Art"
  >
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {artCollection.map(({ href, title }) => (
        <a
          className="cursor-pointer relative rounded-md shadow-sm hover:shadow-none"
          href={href}
          key={title}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="absolute bg-primary-900 flex h-full items-center justify-center left-0 opacity-0 text-white text-2xl top-0 transition-opacity w-full z-40 hover:opacity-75">
            .{title}
          </div>

          <Image
            className="rounded"
            height="720"
            layout="responsive"
            src={`/art/${title}.jpg`}
            width="720"
          />
        </a>
      ))}
    </div>
  </Page>
);

export default Art;
