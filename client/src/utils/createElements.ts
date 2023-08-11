import { createElement } from "react";
import { Component } from "../store/playground/playground.types";

// export const createHtmlElements = (component: Component) => {
//   if (component.type === "heading") {
//     let heading = createElement("h2");
//     heading.innerHTML = component.details.content;
//     return heading;
//   }
// };

export const createHtmlElements = (component: Component) => {
  const {
    details: { content, fontSize, fontType, color },
    type,
  } = component;

  const style = {
    fontSize,
    fontFamily: fontType,
    color,
  };

  return createElement(type, { style }, content);
};
