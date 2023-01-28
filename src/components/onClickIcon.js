export default function onClickIcon(e, type) {
  e.preventDefault();
  let url = "";
  switch (type) {
    case "github":
      url = "https://github.com/anuva312";
      break;
    case "twitter":
      url = "https://twitter.com/this_is_anuVA";
      break;
    case "linkedin":
      url = "https://www.linkedin.com/in/anusree-va";
      break;
    case "reactjs":
      url = "https://reactjs.org";
      break;
    case "javascript":
      url = "https://www.javascript.com";
      break;
    case "html":
      url = "https://html.com";
      break;
    case "css":
      url = "https://developer.mozilla.org/en-US/docs/Web/CSS";
      break;
    case "python":
      url = "https://www.python.org";
      break;
    case "nodejs":
      url = "https://nodejs.org";
      break;
    default:
      url = null;
      break;
  }
  if (url) {
    window.open(url, "_blank");
  }
}
