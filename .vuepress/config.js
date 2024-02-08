module.exports = {
  base: "/",
  title: "Zürich GM Events",
  heading: "GM Zürich 2024",
  dateSubheading: "1. - 14. April 2024",
  subHeading:
    "We're bringing the Ethereum community to the most crypto friendly country and the cradle of blockchain research! This website allows anyone to add and update their side event.",
  calendarHeading: "April 2024",
  submitEventLink: "https://pwn.typeform.com/ZurichSideEvent",
  startDate: {
    day: 1,
    month: 4,
    year: 2024,
  },
  endDate: {
    day: 14,
    month: 4,
    year: 2024,
  },
  daysInFirstMonth: 30,
  startHour: 8,
  endHour: 24,
  duarationInDays: 14,
  dayNames: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  layout: 0, // 0 - banner layout, 1 - venue layout
  bannerPath: "ETH_Zu24_web-datum.png", // only if banner layout
  venues: [
    {
      name: "Duct Tape",
      desc: "yay",
      path: "logo_gm_events.svg",
    },
  ], // only if venue layout
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "icon", href: "./logo_gm_events.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Events",
        link: "/events/",
      },
      {
        text: "Calendar",
        link: "/calendar/",
      },
      {
        text: "EthereumZuri.ch",
        link: "https://ethereumzuri.ch/",
      },
    ],
    logo: "logo_gm_events.svg",
    search: false,
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'JosefJ/PragueBlockchainWeek',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    // docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page!'
  },
};
