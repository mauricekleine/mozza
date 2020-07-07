/** @jsx createElement */
import classNames from "classnames";
import { createElement } from "react";

import HeadingOne from "../components/heading-one";
import HeadingThree from "../components/heading-three";
import HeadingTwo from "../components/heading-two";
import Link from "../components/link";
import Section from "../components/section";
import Subtitle from "../components/subtitle";
import Theme from "../components/theme";
import Title from "../components/title";

const StyleGuide = () => {
  return (
    <Theme>
      {({ bg, text }) => (
        <div>
          <Title>Colors</Title>

          <div className="flex">
            {Object.keys(bg).map((name) => (
              <div
                className={classNames(
                  bg[name],
                  {
                    [text.color.primary]: name === "text",
                  },
                  "flex",
                  "items-center",
                  "justify-center",
                  "h-48",
                  "w-48"
                )}
                key={name}
              >
                {name}
              </div>
            ))}
          </div>

          <Title>Typography</Title>
          <HeadingOne>Heading 1</HeadingOne>
          <HeadingTwo>Heading 2</HeadingTwo>
          <HeadingThree>Heading 3</HeadingThree>
          <Subtitle>Subtitle</Subtitle>
          <Link href="#">Link</Link>
          <p>Regular text</p>

          <Section>
            <Title>Blog post #1</Title>
            <Subtitle>That time I fell of my bike</Subtitle>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              rhoncus metus nec erat commodo, ac convallis nunc varius. Nullam
              sit amet ultricies libero. Morbi libero justo, ullamcorper egestas
              eleifend et, euismod sed massa. Quisque in tellus ut dolor feugiat
              rutrum. Ut justo quam, vestibulum nec nisl eu, euismod pharetra
              mauris. Nunc at augue pretium, ullamcorper dolor et, convallis
              nulla. Integer ex ante, eleifend ac gravida id, efficitur a velit.
              Maecenas ut imperdiet ipsum. Pellentesque efficitur dui et porta
              malesuada. Praesent mi dui, congue ac sodales sit amet, pharetra
              sit amet dui. Aliquam eu congue leo, et tempus sem.
            </p>

            <HeadingOne>Section</HeadingOne>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              rhoncus metus nec erat commodo, ac convallis nunc varius. Nullam
              sit amet ultricies libero. Morbi libero justo, ullamcorper egestas
              eleifend et, euismod sed massa. Quisque in tellus ut dolor feugiat
              rutrum. Ut justo quam, vestibulum nec nisl eu, euismod pharetra
              mauris. Nunc at augue pretium, ullamcorper dolor et, convallis
              nulla. Integer ex ante, eleifend ac gravida id, efficitur a velit.
              Maecenas ut imperdiet ipsum. Pellentesque efficitur dui et porta
              malesuada. Praesent mi dui, congue ac sodales sit amet, pharetra
              sit amet dui. Aliquam eu congue leo, et tempus sem.
            </p>

            <HeadingTwo>Sub-section</HeadingTwo>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              rhoncus metus nec erat commodo, ac convallis nunc varius. Nullam
              sit amet ultricies libero. Morbi libero justo, ullamcorper egestas
              eleifend et, euismod sed massa. Quisque in tellus ut dolor feugiat
              rutrum. Ut justo quam, vestibulum nec nisl eu, euismod pharetra
              mauris. Nunc at augue pretium, ullamcorper dolor et, convallis
              nulla. Integer ex ante, eleifend ac gravida id, efficitur a velit.
              Maecenas ut imperdiet ipsum. Pellentesque efficitur dui et porta
              malesuada. Praesent mi dui, congue ac sodales sit amet, pharetra
              sit amet dui. Aliquam eu congue leo, et tempus sem.
            </p>
          </Section>
        </div>
      )}
    </Theme>
  );
};

export default StyleGuide;
