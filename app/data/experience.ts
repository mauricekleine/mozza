type Positions = {
  endDate?: string;
  location: string;
  startDate: string;
  title: string;
};

export type Experience = {
  company: {
    name: string;
    website: string;
  };
  positions: Positions[];
};

const experience: Experience[] = [
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
      name: "Self-employed / freelance",
      website: "https://mauricekleine.com",
    },
    positions: [
      {
        endDate: "2020/06/01",
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

export default experience;
