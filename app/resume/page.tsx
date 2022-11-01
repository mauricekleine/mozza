import { compareDesc, format, formatDistance, max } from "date-fns";

import type { Experience } from "~/data/experience";
import experience from "~/data/experience";
import Display from "~/ui/display";
import Heading from "~/ui/heading";
import Link from "~/ui/link";
import SpaceContainer from "~/ui/space-container";
import Title from "~/ui/title";

const getLastEndDate = (experience: Experience) => {
  const endDates = experience.positions.map(({ endDate }) =>
    endDate ? new Date(endDate) : new Date()
  );

  return max(endDates);
};

const experienceSortedByEndDate = experience.sort((exp1, exp2) => {
  const exp1EndDate = getLastEndDate(exp1);
  const exp2EndDate = getLastEndDate(exp2);

  return compareDesc(exp1EndDate, exp2EndDate);
});

export default function ResumePage() {
  return (
    <>
      <Display>Resume Maurice Kleine</Display>

      <Heading>
        To me, the most important goal in life is to learn new things - whether
        that be professionally in my career, or in my personal life while
        meeting new people, discovering new places and trying new things.
      </Heading>

      <div className="mt-12 flex flex-col justify-between space-y-12 lg:flex-row lg:space-x-8 lg:space-y-0">
        <div className="flex-1">
          <Heading>👨‍💻 Experience</Heading>

          <SpaceContainer size="sm">
            {experienceSortedByEndDate.map(({ company, positions }) => (
              <div className="pl-2" key={company.name}>
                <div className="flex items-center">
                  <div className="mr-1.5 -ml-1.5 inline-block h-3.5 w-3.5 rounded-full border-2 border-primary-800 dark:border-primary-300"></div>

                  <Link href={company.website}>{company.name}</Link>
                </div>

                <div className="border-l-2 border-primary-800 pl-3 pt-1 dark:border-primary-400">
                  <SpaceContainer size="xs">
                    {positions.map(
                      ({ endDate, location, startDate, title }) => {
                        const start = new Date(startDate);
                        const end = endDate ? new Date(endDate) : new Date();

                        const tenureString = `
                            ${format(start, "MMM yyyy")} -
                            ${endDate ? format(end, "MMM yyyy") : "Present"} ·
                            ${formatDistance(start, end)}`;

                        return (
                          <div key={title}>
                            <Title>{title}</Title>

                            <p>{tenureString}</p>

                            <p>{location}</p>
                          </div>
                        );
                      }
                    )}
                  </SpaceContainer>
                </div>
              </div>
            ))}
          </SpaceContainer>
        </div>

        <div className="flex-1">
          <SpaceContainer size="lg">
            <div>
              <Heading>📚 Education</Heading>

              <SpaceContainer size="sm">
                <div>
                  <Title>Psychology</Title>

                  <p>Bachelor of Science (BSc)</p>

                  <p>Open University of the Netherlands · 2022 -</p>
                </div>

                <div>
                  <Title>Information​ S​cience</Title>

                  <p>Bachelor of Arts (BA) · Average grade: 8.0</p>

                  <p>University of Groningen · 2011 - 2015</p>
                </div>

                <div>
                  <Title>Bachelor Honours Programme</Title>

                  <p>University of Groningen · 2011 - 2015</p>
                </div>
              </SpaceContainer>
            </div>

            <div>
              <Heading>📜 Certifications</Heading>

              <div>
                <Title>Professional Scrum Master I</Title>

                <p>Scrum.org · Aug 2017</p>
              </div>
            </div>

            <div>
              <Heading>🧔 Random facts</Heading>

              <ul className="ml-6 list-disc">
                <li>
                  <Link href="https://www.16personalities.com/enfj-personality">
                    ENFJ-T Personality
                  </Link>
                </li>

                <li>I have two bunnies</li>

                <li>My favorite food is Mexican food</li>

                <li>I brew my own ginger beer</li>
              </ul>
            </div>
          </SpaceContainer>
        </div>
      </div>
    </>
  );
}