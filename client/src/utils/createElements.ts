import { createElement } from "react";
import { Component } from "../store/playground/playground.types";

import { Heading, Text } from "../store/canvas/canvas.types";

import { isHeading, isText } from "./typeCheckers";

export const createHtmlElements = (component: Component) => {
  if (component.type === "heading" && isHeading(component.details)) {
    const {
      details: { content, fontSize, fontType, color },
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
      fontWeight: "500",
      color,
    };

    return createElement("h1", { style }, content);
  }

  if (component.type === "text" && isText(component.details)) {
    const {
      details: { content, lineHeight, fontType, color },
    } = component;

    let renderedSize = "1rem";

    const style = {
      fontSize: renderedSize,
      fontFamily: fontType,
      lineHeight: lineHeight,
      color,
    };

    return createElement("p", { style }, content);
  }
};
