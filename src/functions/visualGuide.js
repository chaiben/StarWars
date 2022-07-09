import { VISUAL_GUIDE_URL } from "../variables";

export default function visualGuide(url) {
  const aux = url.split("/");
  const code = aux[aux.length - 2];
  const type = aux[aux.length - 3];
  
  let typeFolder = "";
  switch (type) {
    case "starships":
      typeFolder = "starships"
      break;
    case "people":
      typeFolder = "characters"
      break;
    case "films":
      typeFolder = "films"
      break;
    default:
      break;
  }
  const imgURL = VISUAL_GUIDE_URL + typeFolder + "/" + code + ".jpg";
  const style = {
    backgroundImage: `url(${imgURL}), url(${VISUAL_GUIDE_URL}big-placeholder.jpg)`,
  }

  return {imgURL, style}
}
