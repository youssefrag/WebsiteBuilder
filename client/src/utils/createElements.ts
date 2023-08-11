import { createElement } from "react";
import { Component } from "../store/playground/playground.types";

export const createHtmlElements = (component: Component) => {
  if (component.type === "heading") {
    const {
      details: { content, fontSize, fontType, color },
      type,
    } = component;

    let renderedSize = "2rem";

    if (fontSize === "medium") {
      renderedSize = "3rem";
    } else if (fontSize === "large") {
      renderedSize = "4.5rem";
    }

    const style = {
      fontSize: renderedSize,
      fontFamily: fontType,
      color,
    };

    return createElement(type, { style }, content);
  }
};
