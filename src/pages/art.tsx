import Image from "next/image";

import Heading from "../components/heading";
import Link from "../components/link";
import Page from "../components/page";
import Small from "../components/small";
import artCollection from "../data/art-collection";

const Art = () => (
  <Page title="Art">
    <Heading>
      My digtal collages, some of which are{" "}
      <Link href="https://opensea.io/accounts/mauricekleine">
        available as NFTs
      </Link>
      .
    </Heading>

    <div className="mb-4 -mt-2">
      <Small>High resolution versions available upon request</Small>
    </div>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {artCollection.map(({ href, title }) => (
        <a
          className="relative rounded-md shadow-sm cursor-pointer hover:shadow-none"
          href={href}
          key={title}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="absolute top-0 left-0 z-40 flex items-center justify-center w-full h-full text-2xl text-white transition-opacity opacity-0 bg-primary-900 hover:opacity-75">
            .{title}
          </div>

          <Image
            alt={`${title} - Maurice Kleine`}
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
