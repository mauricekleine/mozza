import { addYears, compareDesc, format, formatDistance, max } from "date-fns";

import { Heading, Link, Section, Stack } from "~/design-system";

type Positions = {
  endDate?: string;
  location: string;
  startDate: string;
  title: string;
};

type Experience = {
  company: {
    name: string;
    website: string;
  };
  positions: Positions[];
};

const experience: Experience[] = [
  {
    company: {
      name: "uButler",
      website: "https://ubutler.nl",
    },
    positions: [
      {
        endDate: "2022/12/31",
        location: "Amsterdam",
        startDate: "2022/03/01",
        title: "Lead Software Engineer",
      },
    ],
  },
  {
    company: {
      name: "Productboard",
      website: "https://productboard.com",
    },
    positions: [
      {
        endDate: "2021/11/01",
        location: "Remote",
        startDate: "2019/07/01",
        title: "Engineering Manager",
      },
      {
        endDate: "2019/07/01",
        location: "Prague, Czech Republic",
        startDate: "2019/01/01",
        title: "Frontend Engineer",
      },
    ],
  },
  {
    company: {
      name: "Freelance",
      website: "https://mauricekleine.com",
    },
    positions: [
      {
        location: "Remote",
        startDate: "2013/08/01",
        title: "Full-stack Engineer",
      },
    ],
  },
  {
    company: {
      name: "Aeon",
      website: "https://aeon.co",
    },
    positions: [
      {
        endDate: "2018/09/01",
        location: "Remote",
        startDate: "2017/11/01",
        title: "Mobile App Developer (Volunteer)",
      },
    ],
  },
  {
    company: {
      name: "Goodup",
      website: "https://goodup.com",
    },
    positions: [
      {
        endDate: "2018/10/01",
        location: "Amsterdam, The Netherlands",
        startDate: "2018/01/01",
        title: "Product Manager",
      },
      {
        endDate: "2018/01/01",
        location: "Amsterdam, The Netherlands",
        startDate: "2017/03/01",
        title: "Javascript Engineer",
      },
    ],
  },
  {
    company: {
      name: "Klippa",
      website: "https://klippa.com",
    },
    positions: [
      {
        endDate: "2017/03/01",
        location: "Groningen, The Netherlands",
        startDate: "2015/01/01",
        title: "Frontend Engineer",
      },
    ],
  },
  {
    company: {
      name: "Storm Digital",
      website: "https://www.stormdigital.nl/",
    },
    positions: [
      {
        endDate: "2016/12/01",
        location: "Groningen, The Netherlands",
        startDate: "2016/05/01",
        title: "Interim UX Designer",
      },
    ],
  },
];

const getLastEndDate = (experience: Experience) => {
  const endDates = experience.positions.map(({ endDate }) =>
    endDate ? new Date(endDate) : addYears(new Date(), 99)
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
    <Section>
      <Stack gap={16}>
        <Stack gap={4}>
          <Heading as="h1">Maurice Kleine</Heading>

          <Heading as="h3">
            To me, the most important goal in life is to learn new things -
            whether that be professionally in my career, or in my personal life
            while meeting new people, discovering new places and trying new
            things.
          </Heading>
        </Stack>

        <div className="flex flex-col justify-between space-y-12 lg:flex-row lg:space-x-8 lg:space-y-0">
          <div className="flex-1">
            <Stack gap={8}>
              <Heading as="h2">👨‍💻 Experience</Heading>

              <Stack gap={8}>
                {experienceSortedByEndDate.map(({ company, positions }) => (
                  <div className="pl-2" key={company.name}>
                    <div className="flex items-center">
                      <div className="mr-1.5 -ml-1.5 inline-block h-3.5 w-3.5 rounded-full border-2 border-slate-300"></div>

                      <Link href={company.website}>{company.name}</Link>
                    </div>

                    <div className="border-l-2 border-slate-400 pl-3 pt-1">
                      <Stack gap={4}>
                        {positions.map(
                          ({ endDate, location, startDate, title }) => {
                            const start = new Date(startDate);
                            const end = endDate
                              ? new Date(endDate)
                              : new Date();

                            const tenureString = `
                            ${format(start, "MMM yyyy")} -
                            ${endDate ? format(end, "MMM yyyy") : "Present"} ·
                            ${formatDistance(start, end)}`;

                            return (
                              <div key={title}>
                                <Heading as="h3">{title}</Heading>

                                <p>{tenureString}</p>

                                <p>{location}</p>
                              </div>
                            );
                          }
                        )}
                      </Stack>
                    </div>
                  </div>
                ))}
              </Stack>
            </Stack>
          </div>

          <div className="flex-1">
            <Stack gap={16}>
              <Stack gap={8}>
                <Heading as="h2">📚 Education</Heading>

                <Stack gap={8}>
                  <div>
                    <Heading as="h3">Psychology</Heading>

                    <p>Bachelor of Science (BSc)</p>

                    <p>Open University of the Netherlands · 2022 - Present</p>
                  </div>

                  <div>
                    <Heading as="h3">Information​ S​cience</Heading>

                    <p>Bachelor of Arts (BA) · Average grade: 8.0</p>

                    <p>University of Groningen · 2011 - 2015</p>
                  </div>

                  <div>
                    <Heading as="h3">Bachelor Honours Programme</Heading>

                    <p>University of Groningen · 2011 - 2015</p>
                  </div>
                </Stack>
              </Stack>

              <Stack gap={8}>
                <Heading as="h2">📜 Certifications</Heading>

                <div>
                  <Heading as="h3">Professional Scrum Master I</Heading>

                  <p>Scrum.org · Aug 2017</p>
                </div>
              </Stack>

              <Stack gap={8}>
                <Heading as="h2">🧔‍♂️ Random facts</Heading>

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
              </Stack>
            </Stack>
          </div>
        </div>
      </Stack>
    </Section>
  );
}
