import { createElement } from "react";
import { Component } from "../store/playground/playground.types";

export const createHtmlElements = (component: Component) => {
  const {
    details: { content, fontSize, fontType, color },
    type,
  } = component;

  console.log(fontSize);

  const style = {
    fontSize,
    fontFamily: fontType,
    color,
  };

  return createElement(type, { style }, content);
};
