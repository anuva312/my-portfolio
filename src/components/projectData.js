const projectData = [
  {
    id: "1",
    name: "WindBnB",
    description:
      "A small version of Airbnb - Windbnb. A static site created as a part of learning React JS.",
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
      "A #todo App. Developed using React JS. Helps you keep track of which tasks are still left to do, which are in progress and which all are completed.",
    website: "https://brave-bassi-231eac.netlify.app/",
    code: "https://github.com/anuva312/ToDoApp-devChallenges",
    image: "/assets/images/toDoApp.PNG",
    isResponsive: true,
    isCompleted: true,
    isDevChalenge: true,
  },
  {
    id: "3",
    name: "Country Quiz",
    description:
      "A quiz on the countries of the world! Developed using React JS. A fun game that tests your knowledge of the flags, capitals and coat of arms of the different countries of the world.",
    website: "https://quirky-panini-10618a.netlify.app/",
    code: "https://github.com/anuva312/CountryQuiz-devChallenges",
    image: "/assets/images/countryQuiz.PNG",
    isResponsive: true,
    isCompleted: true,
    isDevChalenge: true,
  },
  {
    id: "4",
    name: "Quotes Generator",
    description:
      "A Random Quote Generator. Generates a random quote and also lets you see further quotes by the same person. Developed using React JS.",
    website: "https://musing-pike-ae2f14.netlify.app/",
    code: "https://github.com/anuva312/QuotesGenerator-devChallenges",
    image: "/assets/images/quotesGenerator.PNG",
    isResponsive: true,
    isCompleted: true,
    isDevChalenge: true,
  },
  {
    id: "5",
    name: "Image Uploader",
    description:
      "An Image Uploader. Lets you upload an image and later view the uploaded image. Made using React JS and Node JS. Created as a part of learning back end development.",
    website: "https://master--exquisite-heliotrope-34a798.netlify.app/",
    code: "https://github.com/anuva312/ImageUploader-devChallenges",
    image: "/assets/images/image-Uploader.PNG",
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
