import { useRef } from "react";
import { VISUAL_GUIDE_URL } from "../variables";

export default function useVisualGuide(url) {
  let aux = url.split("/");
  const code = useRef(aux[aux.length - 2]);
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
  const imgURL = VISUAL_GUIDE_URL + typeFolder + "/" + code.current + ".jpg";
  const style = {
    backgroundImage: `url(${imgURL}), url(${VISUAL_GUIDE_URL}big-placeholder.jpg)`,
  }

  return {imgURL, style}
}
