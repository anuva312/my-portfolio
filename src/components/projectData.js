const projectData = [
  {
    id: "1",
    name: "WindBnB",
    description:
      "A small version of Airbnb - Windbnb. Developed as a part of devChallenges Front-End Developer Challenge",
    website: "https://silly-goodall-4678a9.netlify.app/",
    code: "https://github.com/anuva312/WindBnB-devChallenges",
    image: "/assets/images/windbnb.png",
    isResponsive: true,
    isCompleted: true,
    isDevChalenge: true,
  },
  {
    id: "2",
    name: "To Do App",
    description:
      "A #todo App. Developed as a part of devChallenges Front-End-Developer-Challenge",
    website: "https://brave-bassi-231eac.netlify.app/",
    code: "https://github.com/anuva312/ToDoApp-devChallenges",
    image: "/assets/images/todo.png",
    isResponsive: true,
    isCompleted: true,
    isDevChalenge: true,
  },
  {
    id: "3",
    name: "Country Quiz",
    description:
      "A quiz on the countries of the world! Developed as a part of devChallenges FrontEnd Developer Challenge.",
    website: "https://quirky-panini-10618a.netlify.app/",
    code: "https://github.com/anuva312/CountryQuiz-devChallenges",
    image: "/assets/images/country-quiz.png",
    isResponsive: true,
    isCompleted: true,
    isDevChalenge: true,
  },
  {
    id: "4",
    name: "Quotes Generator",
    description:
      "A Random Quote Generator. Developed as a part of devChallenges Front-End-Developer-Challenge.",
    website: "https://musing-pike-ae2f14.netlify.app/",
    code: "https://github.com/anuva312/QuotesGenerator-devChallenges",
    image: "/assets/images/randomQuote.png",
    isResponsive: true,
    isCompleted: true,
    isDevChalenge: true,
  },
  {
    id: "5",
    name: "Image Uploader",
    description:
      "Created the UI as well as APIs required for an image uploader. Created as a part of the Full Stack Developer Challenges in devChallenges.io. The first full stack application I developed.",
    website: "https://master--exquisite-heliotrope-34a798.netlify.app/",
    code: "https://github.com/anuva312/ImageUploader-devChallenges",
    image: "/assets/images/imageUploader.PNG",
    isResponsive: true,
    isCompleted: true,
    isDevChalenge: true,
  },
];

export function getAllProjects() {
  return projectData;
}

export function getProjectsCount() {
  return projectData.length;
}

export function getProjectById(id) {
  return projectData.find((item) => item.id === id);
}
