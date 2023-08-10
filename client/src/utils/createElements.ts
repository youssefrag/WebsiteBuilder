import { Component } from "../store/playground/playground.types";

export const createHtmlElements = (component: Component) => {
  if (component.type === "heading") {
    let heading = document.createElement("h2");
    heading.innerHTML = component.details.content;
    return heading;
  }
};
